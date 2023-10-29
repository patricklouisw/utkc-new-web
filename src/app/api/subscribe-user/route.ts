// @ts-nocheck
import { NextResponse } from "next/server";

import md5 from "md5";
import client from "@mailchimp/mailchimp_marketing";

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const API_KEY = process.env.MAILCHIMP_API_KEY;
const DATACENTER = process.env.MAILCHIMP_API_SERVER;

const ERROR_MESSAGE = `There was an error subscribing to the newsletter. <br />
Send us an email (<b><u><a href='mailto:exec.utkc@gmail.com'>exec.utkc@gmail.com</a></u></b>) and We'll add you the old fashioned way :(.`

client.setConfig({
    apiKey: API_KEY,
    server: DATACENTER,
});

type reqBody = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}

export async function POST(req: Request) {
    const body = await req.json();
    let { firstName, lastName, email }: reqBody  = body;
    let subscriber_hash;

    if (!firstName) {
        return NextResponse.json({ error: 'firstName is required' }, {status: 400});
    }
    if (!lastName) {
        return NextResponse.json({ error: 'lastName is required' }, {status: 400});
    }
    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, {status: 400});
    }

    email = email.toLowerCase();
    console.log({ firstName, lastName, email });

    const tagName = await findAppropriateTag()
    if (tagName == "error"){
        return NextResponse.json({error: ERROR_MESSAGE}, {status: 201});
    }

    const postNewMemberResult = await addUpdateMember(firstName, lastName, email, tagName)
    if ("error" in postNewMemberResult){
        return NextResponse.json({error: ERROR_MESSAGE}, {status: 201});
    }

    return NextResponse.json({}, {status: 201});


};

// HELPER
const findAppropriateTag = async (): string => {
    // Find latest tag by searching by the current year.
    // If month is before September, tag should be previous year
    const curMonth = new Date().getMonth();
    let tagNameQuery = new Date().getFullYear();
    if (curMonth < 8){
        tagNameQuery -= 1
    }

    try {
        const tagResult = await client.lists.tagSearch(AUDIENCE_ID, {name: tagNameQuery});

        if (tagResult.statusCode >= 400) {
            return "error"
        }

        return tagResult["tags"][0]["name"]

    } catch (err: any) {
        console.log(err)
        return "error"
    }
}

const addUpdateMember = async (firstName: string, lastName: string, email: string, tagName: string) => {
    const subscriber_hash = md5(email)

    try {
        // With the new tag, subscribe new member with that tag
        const postNewMemberResult = await client.lists.setListMember(AUDIENCE_ID, subscriber_hash, {
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                },
            email_address: email,
            status_if_new: "subscribed",
            status: 'subscribed',
            tags: [tagName]
        })

        if (postNewMemberResult.statusCode >= 400) {
            return { error: ERROR_MESSAGE }
        }

        return postNewMemberResult;

    } catch (err: any) {
        console.log(err)
        return { error: ERROR_MESSAGE }
    }
}
