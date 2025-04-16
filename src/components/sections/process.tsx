import {
  GitGraphIcon,
  LightbulbIcon,
  NotebookPenIcon,
  UsersIcon,
} from "lucide-react";

const Process = () => {
  return (
    <section aria-labelledby="process-heading">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <h2
          id="process-heading"
          className="mb-4 text-4xl font-semibold md:mb-0"
        >
          Our Process
        </h2>
        <div className="flex flex-col gap-18 md:w-2/3">
          <div className="flex items-center gap-4">
            <LightbulbIcon className="text-forge-primary size-14" />
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-2xl font-semibold">
                Consultation & Discovery
              </h3>
              <p className="text-neutral-400">
                We start by understanding your goals and challenges, gathering
                insights to craft a tailored solution.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NotebookPenIcon className="text-forge-primary size-14" />
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-2xl font-semibold">Planning & Strategy</h3>
              <p className="text-neutral-400">
                Based on the discovery phase, we create a detailed plan with
                clear timelines and objectives for success.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <GitGraphIcon className="text-forge-primary size-14" />
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-2xl font-semibold">Execution & Delivery</h3>
              <p className="text-neutral-400">
                Our team works diligently to implement the solution, ensuring
                high standards and attention to detail, while keeping you in the
                loop every step of the way.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <UsersIcon className="text-forge-primary size-14" />
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-2xl font-semibold">Review & Feedback</h3>
              <p className="text-neutral-400">
                After delivery, we review the results all together, analyze the
                feedback and make any necessary adjustments for continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
