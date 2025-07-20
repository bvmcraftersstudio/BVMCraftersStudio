import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, Users, Award, CheckCircle, FileText, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const stats = [
    { number: "10+", label: "Students Helped" },
    { number: "98%", label: "Success Rate" },
    { number: "2-3 days", label: "Delivery Time" },
    { number: "4.5/5", label: "Students Rating" }
  ];

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Professional Resumes",
      description: "ATS-friendly designs that get you noticed by recruiters and hiring managers."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Portfolios",
      description: "Responsive websites that showcase your skills and projects professionally through online."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Turnaround",
      description: "Get your completed resume or portfolio within 2-4 days."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      company: "IIT Delhi",
      content: "Got my dream internship at Google thanks to their amazing resume design!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "MBA Student", 
      company: "IIM Bangalore",
      content: "The portfolio website helped me land multiple job offers. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      role: "Design Student",
      company: "NIFT Mumbai",
      content: "Professional quality work at student-friendly prices. Amazing service!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">
                  🎓 Made by Students, for Students
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Land Your{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Dream Job
                  </span>{" "}
                  With Professional Design
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Get ATS-friendly <span className="font-bold text-blue-600">Resumes</span> and stunning <span className="font-bold text-blue-600">Portfolio websites</span>  that help you stand out in today's competitive job market. Trusted by 50+ students.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">
                    View Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">See Our Work</Link>
                </Button> */}
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={heroImage} 
                alt="Students working on resumes and portfolios" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[].map((i) => (
                      <div key={i} className="w-6 h-6 bg-primary rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">50+ Happy Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">BVM Crafters</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the challenges students face in today's job market. Our services are designed specifically <span className="font-bold text-blue-600">for students</span>, <span className="font-bold text-gray-600">by students</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Professional designs at student-friendly prices</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resume Design */}
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Resume Design</h3>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "ATS-friendly formatting",
                    "Clean, professional design",
                    "Customized for your field/role",
                    "Shared as PDF"  
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹249</span>
                    <span className="text-muted-foreground"> onwards</span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Portfolio Websites */}
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Portfolio Websites</h3>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Responsive design",
                    "Modern, professional look",
                    "Easy to update",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹249</span>
                    <span className="text-muted-foreground"> onwards</span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground">See how we've helped students achieve their career goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully landed their dream jobs and internships with our professional designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Design your self Today</Link>
            </Button>
            {/* <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;