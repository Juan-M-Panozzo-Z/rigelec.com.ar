"use client";
import { useRouter } from "next/navigation";

const ProjectsPage = ({ params }) => {
    const router = useRouter();
    return (
        <div>
            {params.id}
            <button
                onClick={() => {
                    router.push("/profile/projects");
                }}
                className="btn btn-secondary text-white"
            >
                Volver
            </button>
        </div>
    );
};

export default ProjectsPage;
