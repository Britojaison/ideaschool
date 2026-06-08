import Link from "next/link";

export default function ProgramMenu() {
  return (
    <div className="programMenu">
      <Link className="programMenuTrigger" href="/#program">
        Training
      </Link>
    </div>
  );
}
