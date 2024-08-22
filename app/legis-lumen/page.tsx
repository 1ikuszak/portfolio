import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DynamicImage from "@/components/dynamic-image";

export default function LegisLumen() {
  return (
    <main className="container mx-auto">
      <section className="py-10">
        <h1 className="mb-4 text-5xl lg:text-7xl 2xl:text-8xl">
          AI tailored for Lawyers
        </h1>
        <div className="border-b">Client Project</div>
      </section>
      {/* <section className="mb-32 hidden lg:block">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-1.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-2.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-3.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-4.png" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-white hover:bg-transparent" />
          <CarouselNext className="bg-white hover:bg-transparent" />
        </Carousel>
      </section> */}
      <section className="mb-32 grid grid-cols-1 gap-4 lg:hidden">
        <div className="relative aspect-video h-full w-full">
          <DynamicImage
            alt="legis-lumen-3"
            url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/legis-lumen-3.png"
          />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage
            alt="legis-lumen-1"
            url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/legis-lumen-1.png"
          />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage
            alt="legis-lumen-4"
            url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/legis-lumen-4.png"
          />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage
            alt="legis-lumen-5"
            url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/legis-lumen-5.png"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-20 pb-64 md:grid-cols-2">
        <div>
          <h1 className="mb-2 text-3xl">Goal</h1>
          <div>
            <p className="font-ibmPlex">
              Building frontend for an AI application to help legal
              professionals automate repetitive tasks and assist with research.
              With a limited timeframe of two months and the added pressure of
              balancing studies and startup work, it was important to quickly
              develop a Minimum Viable Product (MVP). This MVP would serve as a
              proof of concept and be ready for presentation to both first test
              clients and investors.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl">Technology Stack</h1>
          <div>
            <p className="font-ibmPlex">
              The application used Next.js for server-side rendering, which was
              critical for enhancing data security. React was employed to build
              interactive interfaces. Tailwind CSS and ShadCN UI were selected
              to create a clean, modern design. Docker was utilized to
              containerize the application, ensuring consistency across
              development and production environments. User authentication was
              handled securely through Auth.js.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl">Asynchronous Processing</h1>
          <div className="max-w-xl">
            <p className="font-ibmPlex">
              To handle API requests efficiently, the system processes queries
              asynchronously. Upon query submission, it sends POST requests to
              multiple endpoints, retrieving the necessary legal information
              concurrently. This approach ensures the application provides
              accurate answers quickly, complete with relevant legal references.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl">Console</h1>
          <div>
            <p className="font-ibmPlex">
              An interactive console was integrated, sliding in from the right
              side of the screen. This console provides detailed explanations of
              the AI-generated answers, including article interpretations to
              build trust in the engine's responses. Additionally, the console
              offers access to PDFs of the original legal documents, ensuring
              users can verify the information and maintain confidence in the
              application.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl">Design Focus</h1>
          <div>
            <p className="font-ibmPlex">
              The design emphasized simplicity and professionalism. Subtle
              animations and a clear layout were key to crafting an intuitive
              experience, making the application easy to use for legal
              professionals.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl">Development Timeline</h1>
          <div>
            <p className="font-ibmPlex">
              The MVP was developed in under two months. By focusing on
              essential features and managing time effectively, the project
              balanced the demands of development with academic commitments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
