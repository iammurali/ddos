"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsappIcon } from "./icons";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export function WhatsappContactDialog({addUserData} : {addUserData: ({name, phone}: {name: string, phone: string}) => void}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors({ name: "", phone: "" }); // Reset errors
    let formValid = true;

    // Validation
    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      formValid = false;
    }

    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
      formValid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
      // Adjust regex to match your phone number format
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
      formValid = false;
    }

    if (formValid) {
      setIsSubmitting(true);
      // Simulate an API call
      addUserData({ name, phone })
      toast("Info updated successfully")
      setTimeout(() => {
        console.log("Submitted:", { name, phone });
        setIsSubmitting(false);
        setName(""); // Clear the input fields
        setPhone("");
      }, 1000);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex flex-row justify-between items-center gap-2 bg-[#172138] rounded-lg py-2 px-4 cursor-pointer">
          <WhatsappIcon /> Get daily dose in WhatsApp <ArrowRightIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add your contact</DialogTitle>
          <DialogDescription>
           Get your daily dose of sarcasm over whatsapp.!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                required
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3"
                required
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Take it"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
