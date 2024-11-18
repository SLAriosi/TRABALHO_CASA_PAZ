import { NextResponse } from "next/server";
import { TeamMember } from "../../../types/team";

export async function GET() {
    const teamMembers: TeamMember[] = [
        {
            photo: "/public/images/DSC_0510.jpg",
            name: "Alice Ferreira",
            role: "Diretora",
        },
        {
            photo: "/public/images/DSC_0510.jpg",
            name: "Bruno Lima",
            role: "Diretora",
        },
        {
            photo: "/public/images/DSC_0510.jpg",
            name: "Carlos Souza",
            role: "Gerente",
        },
        {
            photo: "/public/images/DSC_0510.jpg",
            name: "Carlos Souza",
            role: "Gerente",
        },
        {
            photo: "/public/images/DSC_0510.jpg",
            name: "Carlos Souza",
            role: "Gerente",
        }
    ];
    return NextResponse.json(teamMembers);
}
