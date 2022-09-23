import ContentCard from "./ContentCard";
import IconCalculator from "../images/icon-calculator.svg";
import IconKarma from "../images/icon-karma.svg";
import IconSupervisor from '../images/icon-supervisor.svg';
import IconTeamBuilder from "../images/icon-team-builder.svg";

function Main() {
    return(
        <main className="main">
            <ContentCard 
            bordercolor={"green"}
            title="Supervisor"
            description="Monitors activity to identify project roadblocks" 
            image={IconSupervisor}
            />
                <div className="main-wrapper">
                    <ContentCard 
                    bordercolor={"red"}
                    title="Team Builder"
                    description="Scans our talent network to create theoptimal team for your project"
                    image={IconTeamBuilder}
                    />
                    <ContentCard 
                    bordercolor={"yellow"}
                    title="Karma"
                    description="Regularly evaluates our talent to ensure quality"
                    image={IconKarma}
                    />
                </div>
            <ContentCard 
            bordercolor={"orange"}
            title="Calculator"
            description="Uses data from past projects to provide better deliver estimates"
            image={IconCalculator}
            />
        </main>
    )
}

export default Main