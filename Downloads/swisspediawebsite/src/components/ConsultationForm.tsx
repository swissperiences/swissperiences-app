import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { id: "basic", title: "Basic Info" },
  { id: "details", title: "Details" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  need: string;
  message: string;
  timeline: string;
}

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    need: "",
    message: "",
    timeline: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Inquiry received. We will respond shortly.", {
        description: "You'll receive an email within 24 hours with a preliminary assessment, proposed service tier, and next steps.",
        duration: 8000,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.serviceType !== "";
      case 1:
        return formData.need !== "" && formData.timeline !== "";
      default:
        return true;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center flex-1"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-primary-dark"
                    : index === currentStep
                      ? "bg-primary-dark ring-4 ring-primary-dark/20"
                      : "bg-primary-dark/20",
                )}
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                  }
                }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className={cn(
                  "text-[10px] mt-1.5 font-medium uppercase tracking-wider",
                  index === currentStep
                    ? "text-primary-dark"
                    : "text-primary-dark/50",
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-primary-dark/10 h-1 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-primary-dark"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-2 border-neutral-200 shadow-soft-lg">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-[26px] font-bold text-primary-dark tracking-tight">Request Consultation</CardTitle>
                      <CardDescription className="text-[15px] text-primary-dark/60">
                        Basic information to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="name" className="text-[13px] font-semibold text-primary-dark">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="transition-all duration-300 border-neutral-200"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="email" className="text-[13px] font-semibold text-primary-dark">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="transition-all duration-300 border-neutral-200"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-[13px] font-semibold text-primary-dark">Who is this for?</Label>
                        <RadioGroup
                          value={formData.serviceType}
                          onValueChange={(value) => updateFormData("serviceType", value)}
                          className="space-y-2"
                        >
                          {[
                            { value: "individual", label: "Individual", sub: "Relocation, education advisory" },
                            { value: "institution", label: "Institution", sub: "Recruitment, corporate programs" },
                          ].map((type, index) => (
                            <motion.div
                              key={type.value}
                              className="flex items-start space-x-3 rounded-xl border-2 border-neutral-200 p-4 cursor-pointer hover:border-primary-dark/30 hover:bg-neutral-50 transition-all"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={type.value} id={`type-${index}`} className="mt-1" />
                              <div className="flex-1">
                                <Label htmlFor={`type-${index}`} className="cursor-pointer font-semibold text-primary-dark text-[15px]">
                                  {type.label}
                                </Label>
                                <p className="text-[13px] text-primary-dark/60 mt-0.5">{type.sub}</p>
                              </div>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-[26px] font-bold text-primary-dark tracking-tight">Tell us what you need</CardTitle>
                      <CardDescription className="text-[15px] text-primary-dark/60">
                        Help us understand your situation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-[13px] font-semibold text-primary-dark">What do you need help with?</Label>
                        <RadioGroup
                          value={formData.need}
                          onValueChange={(value) => updateFormData("need", value)}
                          className="space-y-2"
                        >
                          {(formData.serviceType === "individual"
                            ? [
                                { value: "relocation", label: "Swiss Relocation", desc: "Visa, permits, housing, banking" },
                                { value: "education", label: "Executive Education", desc: "MBA/EMBA program selection" },
                                { value: "both", label: "Both", desc: "Combined relocation + education" },
                              ]
                            : [
                                { value: "recruitment", label: "Student Recruitment", desc: "International candidate sourcing" },
                                { value: "corporate", label: "Corporate Programs", desc: "Executive education for teams" },
                              ]
                          ).map((need, index) => (
                            <motion.div
                              key={need.value}
                              className="flex items-start space-x-3 rounded-xl border-2 border-neutral-200 p-4 cursor-pointer hover:border-primary-red/30 hover:bg-neutral-50 transition-all"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={need.value} id={`need-${index}`} className="mt-1" />
                              <div className="flex-1">
                                <Label htmlFor={`need-${index}`} className="cursor-pointer font-semibold text-primary-dark text-[15px]">
                                  {need.label}
                                </Label>
                                <p className="text-[13px] text-primary-dark/60 mt-0.5">{need.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="message" className="text-[13px] font-semibold text-primary-dark">Describe your situation (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="e.g. Moving to Geneva in Q2 2025, looking for MBA programs starting September..."
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          className="min-h-[100px] transition-all duration-300 border-neutral-200"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-[13px] font-semibold text-primary-dark">Timeline</Label>
                        <RadioGroup
                          value={formData.timeline}
                          onValueChange={(value) => updateFormData("timeline", value)}
                          className="space-y-2"
                        >
                          {[
                            { value: "urgent", label: "Urgent (within 1 month)" },
                            { value: "3-months", label: "Within 3 months" },
                            { value: "6-months", label: "Within 6 months" },
                            { value: "flexible", label: "Flexible / exploring options" },
                          ].map((time, index) => (
                            <motion.div
                              key={time.value}
                              className="flex items-center space-x-3 rounded-xl border-2 border-neutral-200 p-3 cursor-pointer hover:border-primary-dark/30 hover:bg-neutral-50 transition-all"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.05 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={time.value} id={`time-${index}`} />
                              <Label htmlFor={`time-${index}`} className="cursor-pointer text-primary-dark text-[14px] font-medium flex-1">
                                {time.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="phone" className="text-[13px] font-semibold text-primary-dark">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          placeholder="+41 XX XXX XX XX"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="transition-all duration-300 border-neutral-200"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex justify-between pt-6 pb-4 border-t border-neutral-200">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 transition-all duration-300 border-neutral-200"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                  disabled={!isStepValid() || isSubmitting}
                  className={cn(
                    "flex items-center gap-2 transition-all duration-300 bg-primary-dark hover:bg-primary-navy",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      {currentStep === steps.length - 1 ? "Submit Request" : "Next"}
                      {currentStep === steps.length - 1 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </>
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      <motion.div
        className="mt-6 text-center text-[12px] text-primary-dark/40 font-medium uppercase tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length}
      </motion.div>
    </div>
  );
};

export default ConsultationForm;
