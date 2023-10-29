"use client";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export default function FAQ() {
  const itemClasses = {
    // base: "py-0 w-full",
    title: "font-semibold text-medium",
    // content: "text-small px-2",
    // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "startContent",
  };

  return (
    <div className="w-full h-50 py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-semibold leading-normal mb-10 text-center">
          Frequently Asked Questions (FAQ)
        </h2>

        <Accordion
          selectionMode="multiple"
          variant="splitted"
          className="p-2 flex flex-col gap-2 w-full"
          itemClasses={itemClasses}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="If I am a beginner with no experience in Karate, can I join the club? "
          >
            Yes absolutely. Don't feel intimidated if you are a beginner. At any
            given classes, the club has a handful of absolute beginners showing
            up. Black belts may seem intimidating at first, but trust me, UTKC
            is a very friendly and welcoming community. If you have any
            questions about the practise, don't hesitate to ask them after
            class, as they will be more than happy to help you improve your
            skills.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="What style of Karate do you practise?"
          >
            At UTKC, we practise traditional Shotokan karate. However, if you
            had previously practised another style, you are still more than
            welcome to join us as we also practise Kumite as well as the
            fundamentals.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Where and when can I sign up?"
          >
            UTKC is run by a group of people who are passionate about Karate, so
            we want you to also love the sport! New members are entitled to 2
            weeks of free trial classes to see if Karate is for them before they
            are required to sign up and pay the membership fees. Registration
            can be done either directly at the Athletic Center office or online.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="What is the cost for signing up?"
          >
            The registration cost for Fall and Winter was ~$65/semester for the
            school year. The club offers 2 hours training 3 times a week, doing
            the math, each class only costs you less than $2! A membership card
            will also be required to access the Athletic Centre. All Uoft
            students are automatically members of the AC; UofT staff, faculty or
            community members will be required to purchase a membership plan.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="What gear do I need to bring to practise? "
          >
            At UTKC, we do require you to buy a uniform if you decide to stay
            with us. Gloves and mouth guards will also be required for sparring.
            However, you do not need to worry about any of these for your first
            few classes. Just wear comfortable clothing and try out the classes.
            If you decide to join the club afterwards, you can order the uniform
            and sparring equipment directly from the club.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
