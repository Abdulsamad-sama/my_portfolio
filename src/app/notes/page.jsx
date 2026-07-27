import NotesContent from "./NotesContent";

export const metadata = {
  title: "Notes",
  description:
    "Technical writings, thoughts, and ideas from Abdulsamad Hamzat on full-stack development, AI, and modern web technologies.",
  openGraph: {
    title: "Notes by Abdulsamad Hamzat",
    description:
      "Technical writings and thoughts on full-stack development, AI, and modern web technologies.",
    url: "https://abdulsamadcodes.netlify.app/notes",
  },
};

export default function NotesPage() {
  return <NotesContent />;
}
