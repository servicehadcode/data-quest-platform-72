
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "XYZ Education helped me connect with top tech companies and land my dream job. The interview preparation and project experience were invaluable.",
      author: "Emily Chen",
      role: "Software Engineer at Google",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "The project-based learning approach gave me practical skills that university courses couldn't. I built a portfolio that impressed recruiters.",
      author: "Marcus Johnson",
      role: "UX Designer at Adobe",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
      id: 3,
      quote: "Creating my professional profile on XYZ opened doors to opportunities I didn't know existed. The platform made it easy to showcase my work.",
      author: "Sofia Rodriguez",
      role: "Product Manager at Microsoft",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg"
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            Hear from students who have transformed their careers through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass rounded-xl p-8 flex flex-col relative">
              <Quote className="h-12 w-12 text-primary/20 absolute -top-2 -left-2" />
              <p className="mb-6 text-lg relative z-10">{testimonial.quote}</p>
              <div className="mt-auto flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
