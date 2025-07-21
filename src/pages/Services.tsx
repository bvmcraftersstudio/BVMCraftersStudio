import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, FileText, Globe, Clock, Users, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const resumePackages = [
    {
      name: "Standard Resume",
      price: "₹249",
      description: "Perfect for internships and entry-level positions",
      features: [
        "Clean, professional design",
        "ATS-friendly formatting",
        "1 page layout",
        "PDF delivery",
        "Within 3 days delivery"
      ],
      popular: false
    },
    {
      name: "Modern Resume",
      price: "₹349",
      description: "Advanced design for competitive applications",
      features: [
        "Modern, eye-catching design",
        "ATS-optimized format",
        "1-2 page layout (based on need)",
        "PDF formats",
        "2 rounds of revisions",
        "Within 2 days delivery"
      ],
      popular: true
    }
  ];

  const htmlPortfolioPackages = {
    category: "HTML/CSS/JS Portfolio",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeeaJcJzwjHKJXeHSzK8Oq23xwA_r5h1IwYpj4eDaETNvsPMg/viewform?usp=header",
    packages: [
      { pages: "1 Page", price: "₹249", description: "Perfect for simple portfolios", offer: "+29 for hosting" },
      { pages: "2 Pages", price: "₹359", description: "About + Portfolio showcase", offer: "+29 for hosting" },
      { pages: "3 Pages", price: "₹450", description: "Complete professional presence", offer: "+19 for hosting" },
      { pages: "4 Pages", price: "₹550", description: "Comprehensive portfolio site", offer: "Free Hosting" }
    ],
    recommended: false
  };

  const reactPortfolioPackages = {
    category: "React/Tailwind CSS Portfolio",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc6IFoEo_QUwewPwHu3GK3-1HqeMfdwQvyAPwqYeUH2z2NEUQ/viewform?usp=header",
    packages: [
      { pages: "1 Page", price: "₹360", description: "Modern single-page portfolio", offer: "+49 for hosting" },
      { pages: "2 Pages", price: "₹450", description: "Advanced portfolio with navigation", offer: "+49 for hosting" },
      { pages: "3 Pages", price: "₹590", description: "Complete student portfolio", offer: "Free Hosting" },
      { pages: "4 Pages", price: "₹759", description: "Student portfolio with smooth attractive design", offer: "Free Hosting" }
    ],
    recommended: true
  }



  const websiteFeatures = [
    "Skills and experience sections",
    "Mobile-responsive design",
    "Professional project showcase",
    "Social media links",
    "Free hosting for 1 year",
    "Easy content updates",
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We understand your requirements, career goals, and design preferences."
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Our team creates your resume or portfolio using industry best practices."
    },
    {
      step: "3",
      title: "Review & Revisions",
      description: "You review the work and we make revisions based on your feedback."
    },
    {
      step: "4",
      title: "Final Delivery",
      description: "Receive your completed resume/portfolio with all necessary files and documentation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="text-primary mb-4">
            🎯 Professional Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional resume design and portfolio development services tailored specifically for college students and recent graduates.
          </p>
        </div>
      </section>

      {/* Resume Design Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold">Resume Design</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get noticed by recruiters with professionally designed, ATS-friendly resumes that highlight your strengths and achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resumePackages.map((pkg, index) => (
              <Card key={index} className={`relative p-8 hover:shadow-elegant transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" asChild>
                    <Link to="/contact">Order Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Websites Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold">Portfolio Websites</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase your projects and skills with a professional portfolio website that makes a lasting impression on employers.
            </p>
          </div>

          {/* Website Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {websiteFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Packages */}
          <div className="space-y-12">
            {[htmlPortfolioPackages, reactPortfolioPackages].map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold flex items-center justify-center space-x-2">
                    <span>{category.category}</span>
                    {category.recommended && (
                      <Badge variant="secondary" className="text-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Recommended
                      </Badge>
                    )}
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.packages.map((pkg, pkgIndex) => (
                    <Card key={pkgIndex} className="relative text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">

                      {/* Offer Badge with Animation */}
                      {pkg.offer && (
                        <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded animate-bounce-slow z-10 shadow-md">
                        {pkg.offer}
                      </div>
                      )}

                      <CardHeader>
                        <CardTitle className="text-lg">{pkg.pages}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <CardDescription className="text-sm">{pkg.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link to={category.formLink}>Get Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-primary/10 border-primary/20">
              <div className="text-lg font-semibold mb-2">Need Custom Pages?</div>
              <div className="text-muted-foreground mb-4">We offer customized solutions based on your specific requirements</div>
              <Button variant="hero" asChild>
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process to get your professional resume or portfolio ready
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose BVM Crafters Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your completed work within 12-48 hours, perfect for urgent applications.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Student-Focused</h3>
              <p className="text-muted-foreground">Designed by students who understand the challenges of modern job hunting.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="text-muted-foreground">50+ students have successfully landed jobs and internships with our help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Place Your Order</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Services;



















