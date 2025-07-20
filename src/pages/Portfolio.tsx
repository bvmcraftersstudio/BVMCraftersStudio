import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const resumeExamples = [
    {
      title: "Software Engineer Resume",
      category: "Modern Design",
      description: "Clean, ATS-friendly resume for a computer science student",
      image: "/placeholder.svg",
      tags: ["ATS-Optimized", "Modern", "Technical"]
    },
    {
      title: "Business Analyst Resume", 
      category: "Professional Design",
      description: "Elegant resume design for business and finance students",
      image: "/placeholder.svg",
      tags: ["Professional", "Clean", "Business"]
    },
    {
      title: "Creative Designer Resume",
      category: "Creative Design", 
      description: "Eye-catching resume for design and creative students",
      image: "/placeholder.svg",
      tags: ["Creative", "Visual", "Unique"]
    }
  ];

  const portfolioExamples = [
    {
      title: "Developer Portfolio",
      category: "React Website",
      description: "Modern portfolio website for a full-stack developer",
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "Responsive", "Modern"],
      pages: 3
    },
    {
      title: "Designer Portfolio",
      category: "HTML/CSS Website",
      description: "Clean portfolio showcasing design projects and skills",
      image: "/placeholder.svg", 
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Design", "Creative", "Portfolio"],
      pages: 2
    },
    {
      title: "Business Portfolio",
      category: "React Website",
      description: "Professional portfolio for business and marketing students",
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#", 
      tags: ["Business", "Professional", "Marketing"],
      pages: 4
    }
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Engineering Student",
      company: "VIT University", 
      content: "The resume design helped me get shortlisted for 5 companies in campus placements!",
      rating: 5,
      project: "Modern Resume Design"
    },
    {
      name: "Kavya Singh",
      role: "Computer Science Student", 
      company: "BITS Pilani",
      content: "My portfolio website perfectly showcases my projects. Got multiple interview calls!",
      rating: 5,
      project: "React Portfolio Website"
    },
    {
      name: "Rohit Sharma",
      role: "MBA Student",
      company: "IIM Ahmedabad", 
      content: "Professional quality work delivered on time. Highly recommend for fellow students!",
      rating: 5,
      project: "Business Portfolio"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250+", label: "Resumes Designed" },
    { number: "150+", label: "Websites Built" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="text-primary mb-4">
            🎨 Our Work
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the quality and creativity behind our resume designs and portfolio websites. See how we've helped students like you achieve their career goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Examples */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resume Designs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional, ATS-friendly resume designs that help students stand out in competitive job markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeExamples.map((resume, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img 
                    src={resume.image} 
                    alt={resume.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit text-xs">{resume.category}</Badge>
                  <CardTitle className="text-lg">{resume.title}</CardTitle>
                  <CardDescription>{resume.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {resume.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Websites */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Portfolio Websites</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, responsive portfolio websites that showcase skills and projects professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioExamples.map((portfolio, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                    <Button variant="hero" size="sm" asChild>
                      <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{portfolio.category}</Badge>
                    <Badge variant="outline" className="text-xs">{portfolio.pages} Pages</Badge>
                  </div>
                  <CardTitle className="text-lg">{portfolio.title}</CardTitle>
                  <CardDescription>{portfolio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from students who achieved success with our designs
            </p>
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
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quality You Can Trust</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is crafted with attention to detail and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold">Professional Design</h3>
              <p className="text-muted-foreground text-sm">Modern, clean designs that make great first impressions</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold">Mobile Responsive</h3>
              <p className="text-muted-foreground text-sm">Perfect viewing experience across all devices</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Fast Loading</h3>
              <p className="text-muted-foreground text-sm">Optimized for speed and performance</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold">SEO Optimized</h3>
              <p className="text-muted-foreground text-sm">Better visibility in search results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their career prospects with our professional designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;