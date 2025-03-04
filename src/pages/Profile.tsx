import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  User, Mail, Briefcase, GraduationCap, MapPin, Globe, Github, 
  Linkedin, Twitter, FileEdit, Share, Download, Trophy, Award,
  Flame, Medal, CheckCircle, Star, Rocket, Code, Key, Server, 
  Database, Clock
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("view");
  
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    title: "Front-end Developer",
    email: "alex.johnson@example.com",
    location: "San Francisco, CA",
    about: "Passionate front-end developer with 3 years of experience building responsive and accessible web applications. Specialized in React ecosystem and modern JavaScript.",
    education: "B.S. Computer Science, Stanford University",
    skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML5", "Tailwind CSS", "Node.js", "Git"],
    experience: [
      {
        id: 1,
        company: "TechCorp Inc.",
        role: "Front-end Developer",
        period: "2020 - Present",
        description: "Developing and maintaining responsive web applications using React, TypeScript, and Tailwind CSS."
      },
      {
        id: 2,
        company: "StartUp Labs",
        role: "Junior Developer",
        period: "2018 - 2020",
        description: "Worked on various client projects utilizing JavaScript, CSS, and HTML."
      }
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with cart functionality, payment integration, and user authentication.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A Trello-like application for managing tasks and projects with drag-and-drop functionality.",
        technologies: ["React", "Redux", "Firebase"],
        link: "#"
      }
    ],
    links: {
      github: "github.com/alexjohnson",
      linkedin: "linkedin.com/in/alexjohnson",
      twitter: "twitter.com/alexjohnson",
      website: "alexjohnson.dev"
    },
    badges: [
      { id: 1, name: "React Master", icon: <Code className="w-5 h-5" />, description: "Completed 10+ React projects", color: "bg-blue-500" },
      { id: 2, name: "TypeScript Pro", icon: <Key className="w-5 h-5" />, description: "Demonstrated advanced TypeScript skills", color: "bg-blue-700" },
      { id: 3, name: "API Wizard", icon: <Server className="w-5 h-5" />, description: "Integrated with 5+ external APIs", color: "bg-purple-600" },
      { id: 4, name: "Database Guru", icon: <Database className="w-5 h-5" />, description: "Proficient in MongoDB and SQL", color: "bg-green-600" },
      { id: 5, name: "7-Day Streak", icon: <Flame className="w-5 h-5" />, description: "Coded for 7 consecutive days", color: "bg-orange-500" }
    ],
    trophies: [
      { id: 1, name: "Top Contributor", icon: <Trophy className="w-6 h-6 text-yellow-500" />, description: "Ranked in the top 5% of platform contributors" },
      { id: 2, name: "Project Excellence", icon: <Award className="w-6 h-6 text-blue-500" />, description: "Project featured on platform homepage" },
      { id: 3, name: "Coding Challenge Champion", icon: <Medal className="w-6 h-6 text-amber-500" />, description: "Won monthly coding challenge" }
    ],
    stats: [
      { name: "Projects Completed", value: 15, icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
      { name: "Longest Streak", value: "14 days", icon: <Flame className="w-5 h-5 text-orange-500" /> },
      { name: "Hours Logged", value: 342, icon: <Clock className="w-5 h-5 text-blue-500" /> },
      { name: "Current XP", value: 2750, icon: <Star className="w-5 h-5 text-yellow-500" /> },
      { name: "Current Level", value: 8, icon: <Rocket className="w-5 h-5 text-purple-500" /> }
    ]
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setProfile(prev => ({
      ...prev,
      skills
    }));
  };

  const handleExperienceChange = (id, field, value) => {
    setProfile(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleProjectChange = (id, field, value) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const handleLinksChange = (platform, value) => {
    setProfile(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [platform]: value
      }
    }));
  };

  const handleBadgeChange = (id, field, value) => {
    setProfile(prev => ({
      ...prev,
      badges: prev.badges.map(badge => 
        badge.id === id ? { ...badge, [field]: value } : badge
      )
    }));
  };

  const handleTrophyChange = (id, field, value) => {
    setProfile(prev => ({
      ...prev,
      trophies: prev.trophies.map(trophy => 
        trophy.id === id ? { ...trophy, [field]: value } : trophy
      )
    }));
  };

  const handleStatChange = (index, field, value) => {
    setProfile(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    }));
  };

  const handleSaveProfile = () => {
    console.log("Profile saved:", profile);
    toast.success("Profile updated successfully!");
    setActiveTab("view");
  };

  const handleShareProfile = () => {
    toast.success("Profile link copied to clipboard!");
  };

  const handleDownloadResume = () => {
    toast.success("Resume downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-12 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Your Profile</h1>
              <TabsList className="glass">
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="view" className="space-y-8">
              <div className="glass rounded-xl p-8">
                <div className="sm:flex items-start gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt={profile.name} />
                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="mt-4 sm:mt-0">
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-lg text-muted-foreground">{profile.title}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{profile.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {Object.entries(profile.links).map(([platform, link]) => (
                        <Button key={platform} variant="outline" size="sm" className="h-8" asChild>
                          <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                            {platform === 'github' && <Github className="h-4 w-4 mr-1" />}
                            {platform === 'linkedin' && <Linkedin className="h-4 w-4 mr-1" />}
                            {platform === 'twitter' && <Twitter className="h-4 w-4 mr-1" />}
                            {platform === 'website' && <Globe className="h-4 w-4 mr-1" />}
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {profile.stats.map((stat, index) => (
                    <div key={index} className="glass-card p-3 rounded-lg text-center">
                      <div className="flex justify-center">{stat.icon}</div>
                      <p className="text-lg font-semibold mt-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.name}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {profile.trophies.map(trophy => (
                      <div key={trophy.id} className="glass-card p-4 rounded-lg border border-primary/10">
                        <div className="flex items-start gap-3">
                          {trophy.icon}
                          <div>
                            <h4 className="font-medium">{trophy.name}</h4>
                            <p className="text-sm text-muted-foreground">{trophy.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    Skills & Badges
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.badges.map(badge => (
                      <div 
                        key={badge.id} 
                        className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium text-white ${badge.color}`}
                        title={badge.description}
                      >
                        <span className="mr-1">{badge.icon}</span>
                        {badge.name}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">About</h3>
                    <p>{profile.about}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Education</h3>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                      <span>{profile.education}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Experience</h3>
                    <div className="space-y-4">
                      {profile.experience.map(exp => (
                        <div key={exp.id} className="border-l-2 border-primary/30 pl-4 py-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{exp.role}</h4>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <div className="text-muted-foreground mb-2">{exp.company}</div>
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Projects</h3>
                    <div className="space-y-4">
                      {profile.projects.map(project => (
                        <div key={project.id} className="p-4 rounded-md bg-secondary/50">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{project.title}</h4>
                            <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                              </a>
                            </Button>
                          </div>
                          <p className="text-sm my-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button onClick={() => setActiveTab("edit")} className="gap-2">
                    <FileEdit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" onClick={handleShareProfile} className="gap-2">
                    <Share className="h-4 w-4" />
                    Share Profile
                  </Button>
                  <Button variant="outline" onClick={handleDownloadResume} className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="edit" className="space-y-8">
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-medium mb-6">Personal Information</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={profile.name} 
                        onChange={handleProfileChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="title" className="block font-medium">Professional Title</label>
                      <Input 
                        id="title" 
                        name="title" 
                        value={profile.title} 
                        onChange={handleProfileChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={profile.email} 
                        onChange={handleProfileChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="location" className="block font-medium">Location</label>
                      <Input 
                        id="location" 
                        name="location" 
                        value={profile.location} 
                        onChange={handleProfileChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="about" className="block font-medium">About Me</label>
                    <Textarea 
                      id="about" 
                      name="about" 
                      value={profile.about} 
                      onChange={handleProfileChange} 
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="education" className="block font-medium">Education</label>
                    <Input 
                      id="education" 
                      name="education" 
                      value={profile.education} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="skills" className="block font-medium">Skills (comma separated)</label>
                    <Input 
                      id="skills" 
                      name="skills" 
                      value={profile.skills.join(', ')} 
                      onChange={handleSkillsChange} 
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-6">Experience</h3>
                
                <div className="space-y-6">
                  {profile.experience.map(exp => (
                    <div key={exp.id} className="p-4 border border-border rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <label className="block font-medium">Company</label>
                          <Input 
                            value={exp.company} 
                            onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-medium">Role</label>
                          <Input 
                            value={exp.role} 
                            onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <label className="block font-medium">Time Period</label>
                          <Input 
                            value={exp.period} 
                            onChange={(e) => handleExperienceChange(exp.id, 'period', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block font-medium">Description</label>
                        <Textarea 
                          value={exp.description} 
                          onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)} 
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-6">Projects</h3>
                
                <div className="space-y-6">
                  {profile.projects.map(project => (
                    <div key={project.id} className="p-4 border border-border rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <label className="block font-medium">Project Title</label>
                          <Input 
                            value={project.title} 
                            onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-medium">Project Link</label>
                          <Input 
                            value={project.link} 
                            onChange={(e) => handleProjectChange(project.id, 'link', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <label className="block font-medium">Description</label>
                        <Textarea 
                          value={project.description} 
                          onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)} 
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-medium">Technologies (comma separated)</label>
                        <Input 
                          value={project.technologies.join(', ')} 
                          onChange={(e) => handleProjectChange(project.id, 'technologies', e.target.value.split(',').map(t => t.trim()))} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-6">Achievements & Stats</h3>
                
                <h4 className="text-lg font-medium mb-4">Badges</h4>
                <div className="space-y-4 mb-6">
                  {profile.badges.map(badge => (
                    <div key={badge.id} className="p-4 border border-border rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="block font-medium">Badge Name</label>
                          <Input 
                            value={badge.name} 
                            onChange={(e) => handleBadgeChange(badge.id, 'name', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-medium">Badge Color</label>
                          <Input 
                            value={badge.color} 
                            onChange={(e) => handleBadgeChange(badge.id, 'color', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-medium">Description</label>
                          <Input 
                            value={badge.description} 
                            onChange={(e) => handleBadgeChange(badge.id, 'description', e.target.value)} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-medium mb-4">Trophies</h4>
                <div className="space-y-4 mb-6">
                  {profile.trophies.map(trophy => (
                    <div key={trophy.id} className="p-4 border border-border rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block font-medium">Trophy Name</label>
                          <Input 
                            value={trophy.name} 
                            onChange={(e) => handleTrophyChange(trophy.id, 'name', e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-medium">Description</label>
                          <Input 
                            value={trophy.description} 
                            onChange={(e) => handleTrophyChange(trophy.id, 'description', e.target.value)} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-6">Social Links</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-medium flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </label>
                    <Input 
                      value={profile.links.github} 
                      onChange={(e) => handleLinksChange('github', e.target.value)} 
                      placeholder="github.com/username"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-medium flex items-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </label>
                    <Input 
                      value={profile.links.linkedin} 
                      onChange={(e) => handleLinksChange('linkedin', e.target.value)} 
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-medium flex items-center gap-2">
                      <Twitter className="h-4 w-4" /> Twitter
                    </label>
                    <Input 
                      value={profile.links.twitter} 
                      onChange={(e) => handleLinksChange('twitter', e.target.value)} 
                      placeholder="twitter.com/username"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Personal Website
                    </label>
                    <Input 
                      value={profile.links.website} 
                      onChange={(e) => handleLinksChange('website', e.target.value)} 
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button onClick={handleSaveProfile}>Save Profile</Button>
                  <Button variant="outline" onClick={() => setActiveTab("view")}>Cancel</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
