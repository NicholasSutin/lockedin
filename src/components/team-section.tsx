import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nicholas Sutin",
    role: "Developer",
    image: "/team/alec.jpg",
  },
  {
    name: "Pavla Smid",
    role: "Creative & Marketing Director",
    image: "/team/alexandru.jpg",
  },
  {
    name: "Celeste Obregon",
    role: "Product Designer",
    image: "/team/andy.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-3 gap-8 justify-items-start">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar className="h-14 w-14 rounded-lg">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="rounded-lg bg-muted">
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col">
              <h3 className="text-foreground text-lg font-medium">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
