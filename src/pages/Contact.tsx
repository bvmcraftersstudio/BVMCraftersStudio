import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle, FileText, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "bvmcraftersstudio@gmail.com",
      action: "mailto:bvmcraftersstudio@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us", 
      description: "Speak directly with our team",
      value: "+91 9384476534",
      mobile: "+91 6369194095",
      // action: "tel:+919876543210"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+91 9384476534",
      // mobile: "+91 6369194095",
      // action: "https://wa.me/919876543210"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to complete my order?",
      answer: "Resume designs are typically delivered within 2-3 days, while portfolio websites take 1-4 days depending on complexity."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! We include 2 rounds of revisions with specific order to ensure you're completely satisfied with the final result."
    },
    {
      question: "What file formats do you provide?",
      answer: "Resumes are delivered in PDF format. Websites include all source code."
    },
    // {
    //   question: "Do you offer rush delivery?",
    //   answer: "Yes, we offer express delivery for urgent requirements. Please mention your deadline when contacting us."
    // }
  ];

  const serviceOptions = [
    { value: "standard-resume", label: "Standard Resume (₹249)" },
    { value: "modern-resume", label: "Modern Resume (₹349)" },
    { value: "html-1page", label: "HTML/CSS 1-Page Website (₹249)" },
    { value: "html-2page", label: "HTML/CSS 2-Page Website (₹359)" },
    { value: "html-3page", label: "HTML/CSS 3-Page Website (₹450)" },
    { value: "html-4page", label: "HTML/CSS 4-Page Website (₹550)" },
    { value: "react-1page", label: "React 1-Page Website (₹360)" },
    { value: "react-2page", label: "React 2-Page Website (₹450)" },
    { value: "react-3page", label: "React 3-Page Website (₹590)" },
    { value: "react-4page", label: "React 4-Page Website (₹759)" },
    { value: "custom-resume", label: "Resume - Custom Requirements" },
    { value: "custom-portfolio", label: "Portfolio - Custom Requirements" }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Your Request",
      description: "Fill out our form with your requirements and preferences."
    },
    {
      step: "2",
      title: "Consultation Inquiry",
      description: "We'll schedule a brief inquiry to understand your needs better."
    },
    {
      step: "3",
      title: "Design & Development",
      description: "Our team creates your resume or portfolio with attention to detail."
    },
    {
      step: "4",
      title: "Review & Delivery",
      description: "You review the work, we make revisions, and deliver the final files."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="text-primary mb-4">
            📞 Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Your <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your career prospects? Get in touch with us and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-4">{method.value}</p>
                  <p className="font-medium mb-4">{method.mobile}</p>
                  <Button variant="outline" asChild>
                    <a href={method.action} target="_blank" rel="noopener noreferrer">
                      Contact Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* <div className="space-y-2">
                    <Label htmlFor="urgency">Timeline</Label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (2-3 days)</SelectItem>
                        <SelectItem value="priority">Priority (1-2 days)</SelectItem>
                        <SelectItem value="express">Express (12-24 hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your requirements, field of study, target companies, any specific preferences..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <a href="mailto:bvmcraftersstudio@gmail.com">Send Message</a> 
                  </Button>
                </form>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose BVM Crafters Studio</h2>
                <div className="space-y-4">
                  {[
                    "Quick 3-4 days delivery",
                    "Student-friendly pricing",
                    // "Multiple revision rounds",
                    "ATS-format designs",
                    "Mobile-responsive websites",
                    // "Free hosting included"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Response Time</h3>
                </div>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 8-10 hours during academic hours (9 AM - 8 PM IST). For urgent requests, WhatsApp us directly. (Sunday: Holiday)
                </p>
              </Card>

              {/* <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Based in Mumbai, India<br />
                  Serving students across India<br />
                  Remote service delivery
                </p>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from inquiry to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <a href="mailto:bvmcraftersstudio@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully landed their dream jobs with our professional designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:bvmcraftersstudio@gmail.com">Start Your Order</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;