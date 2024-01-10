import "./ExploreContainer.css";

declare var OneTrust: any;

interface ContainerProps {
  c4Status: number;
}

const ExploreContainer: React.FC<ContainerProps> = ({ c4Status }) => {
  return (
    <div id="container">
      <button
        onClick={() => {
          OneTrust.showBannerUI();
        }}
      >
        Load Banner
      </button>
      <button
        onClick={() => {
          OneTrust.showPreferenceCenterUI();
        }}
      >
        Load Preference Center
      </button>
      <p>
        The status of categor C0004 is <b>{c4Status}</b>
      </p>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
