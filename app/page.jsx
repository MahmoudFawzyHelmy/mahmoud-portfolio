import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="home-section relative h-full overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex min-h-[calc(100vh-150px)] flex-col justify-center xl:flex-row xl:items-center xl:justify-between">
          <div className="relative z-10 max-w-[760px] text-center xl:text-left">
            <div className="role-pill mx-auto mb-6 w-fit xl:mx-0">
              <span className="status-dot" />
              React Developer
            </div>

            <h1 className="h1 mb-6">
              Hello, I&apos;m
              <br />
              <span className="name-gradient">Mahmoud Fawzy</span>
            </h1>

            <p className="mx-auto mb-9 max-w-[590px] text-base leading-7 text-white/65 md:text-lg xl:mx-0">
              I craft modern, responsive digital experiences with clean code,
              thoughtful interactions, and a sharp eye for detail.
            </p>

            <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center xl:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="download-button min-w-[190px]"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Socials
                  containerStyles={"flex gap-3"}
                  iconStyles={
                    "social-button"
                  }
                />
              </div>
            </div>
          </div>

          <div className="hero-art mx-auto mt-12 hidden xl:block">
            <div className="hero-glow" />
            <div className="code-window">
              <div className="code-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="code-lines">
                <div><b>01</b><span><i>const</i> developer = {"{"}</span></div>
                <div><b>02</b><span>&nbsp;&nbsp;name: <em>&quot;Mahmoud&quot;</em>,</span></div>
                <div><b>03</b><span>&nbsp;&nbsp;craft: <em>&quot;React apps&quot;</em>,</span></div>
                <div><b>04</b><span>&nbsp;&nbsp;mindset: <em>&quot;Always growing&quot;</em></span></div>
                <div><b>05</b><span>{"}"};</span></div>
              </div>
            </div>
            <div className="floating-card floating-card-react">
              <span className="react-symbol">⚛</span>
              <div><strong>React</strong><small>Frontend</small></div>
            </div>
            <div className="floating-card floating-card-code">
              <span className="code-symbol">&lt;/&gt;</span>
              <div><strong>Clean code</strong><small>Built to scale</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
