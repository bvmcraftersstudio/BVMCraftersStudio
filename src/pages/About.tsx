import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Target, Users, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const founders = [
    {
      name: "Aryan Patel",
      role: "Co-Founder & Lead Designer",
      education: "B.Tech Computer Science, IIT Delhi",
      image: "/placeholder.svg",
      bio: "Passionate about creating beautiful, functional designs that help students showcase their potential.",
      skills: ["UI/UX Design", "React Development", "Brand Design"]
    },
    {
      name: "Priya Sharma", 
      role: "Co-Founder & Frontend Developer",
      education: "B.Tech Information Technology, BITS Pilani",
      image: "/placeholder.svg",
      bio: "Specializes in creating responsive, modern websites that perform excellently across all devices.",
      skills: ["Frontend Development", "React", "Tailwind CSS"]
    },
    {
      name: "Rohit Kumar",
      role: "Co-Founder & Business Lead", 
      education: "BBA Marketing, SRCC Delhi University",
      image: "/placeholder.svg",
      bio: "Focuses on understanding client needs and ensuring exceptional service delivery.",
      skills: ["Business Strategy", "Client Relations", "Marketing"]
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Student-First Approach",
      description: "We understand the unique challenges students face and design solutions specifically for your needs and budget."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Quality Excellence", 
      description: "Every resume and portfolio is crafted with meticulous attention to detail and industry best practices."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Process",
      description: "We work closely with you throughout the process, incorporating your feedback and ensuring satisfaction."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded ResumeForge",
      description: "Started with a mission to help fellow students succeed in their career journey."
    },
    {
      year: "2023",
      title: "First 100 Students",
      description: "Helped our first 100 students with professional resumes and portfolios."
    },
    {
      year: "2024", 
      title: "500+ Success Stories",
      description: "Reached 500+ satisfied students with 98% client satisfaction rate."
    },
    {
      year: "2024",
      title: "Expanding Services",
      description: "Introduced React-based portfolio websites and career consultation services."
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Helped" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24hrs", label: "Average Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="text-primary mb-4">
            🎓 Our Story
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">ResumeForge</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're three passionate college students who transformed our own career challenges into a mission to help fellow students succeed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                It all started when we were struggling to create impressive resumes and portfolios for our own internship applications. We realized that many students face the same challenge - having great skills and projects but lacking the design expertise to present them professionally.
              </p>
              <p className="text-lg text-muted-foreground">
                After helping our friends and classmates with their applications and seeing their success in landing internships and jobs, we decided to turn our passion into a service that could help students across India.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've helped over 500 students transform their career prospects with professional designs that truly reflect their potential.
              </p>
            </div>
            
            <div className="relative">
              <Card className="p-8 shadow-elegant">
                <div className="text-center space-y-4">
                  <GraduationCap className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower every student with professional-quality resumes and portfolios that open doors to their dream careers, regardless of their design background or budget constraints.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">Numbers that reflect our commitment to student success</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three college students passionate about helping fellow students achieve their career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{founder.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{founder.role}</CardDescription>
                  <Badge variant="outline" className="mt-2 text-xs">{founder.education}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to help students succeed
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit text-primary font-bold">{milestone.year}</Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Students Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us different from other service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Student-Friendly Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Affordable rates designed specifically for college students and fresh graduates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Peer Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  As students ourselves, we understand your challenges and aspirations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  500+ students have successfully landed jobs and internships with our help
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create a professional presence that opens doors to your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;