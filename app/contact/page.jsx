"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20)1094755985",
    href: "tel:+201094755985",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mahmoudfawzy.helmy@gmail.com",
    href: "mailto:mahmoudfawzy.helmy@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Toukh , Qalyubia",
    href: "https://maps.google.com/?q=Toukh,Qalyubia,Egypt",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="contact-section flex min-h-[calc(100vh-118px)] items-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <div className="contact-grid grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] xl:gap-10">
          <div className="contact-form-wrap">
            <form action="" className="contact-form">
              <div className="contact-heading">
                <span>Contact</span>
                <h1>Send a Message</h1>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="contact-field">
                  <span>First name</span>
                  <Input name="firstName" placeholder="John" />
                </label>
                <label className="contact-field">
                  <span>Last name</span>
                  <Input name="lastName" placeholder="Doe" />
                </label>
                <label className="contact-field">
                  <span>Email address</span>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </label>
                <label className="contact-field">
                  <span>Phone number</span>
                  <Input name="phone" type="tel" placeholder="+20..." />
                </label>
              </div>

              <label className="contact-field">
                <span>Service</span>
                <Select>
                  <SelectTrigger className="contact-select">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="fullstack">
                      Full-Stack Application
                    </SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label className="contact-field">
                <span>Message</span>
                <Textarea
                  name="message"
                  className="contact-message"
                  placeholder="Tell me about your project..."
                />
              </label>

              <Button type="submit" size="lg" className="contact-submit">
                Send message
                <LuSend />
              </Button>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="contact-aside-heading">
              <span>Get in touch</span>
              <p>
                I&apos;m available for freelance work and new opportunities.
              </p>
            </div>
            <div className="contact-info-list">
              {info.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Address" ? "_blank" : undefined}
                  rel={item.title === "Address" ? "noreferrer" : undefined}
                  className="contact-info-card"
                >
                  <span className="contact-info-icon">{item.icon}</span>
                  <span>
                    <small>{item.title}</small>
                    <strong>{item.description}</strong>
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
