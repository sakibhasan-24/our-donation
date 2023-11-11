import { useLocation, useNavigate } from "react-router-dom";

export default function SingleDonation({ donation }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigateDonatePage = (donation) => {
    navigate(`/donate-now/${donation.id}`);
  };

  return (
    <section
      onClick={() => handleNavigateDonatePage(donation)}
      className={`rounded-lg border-2  bg-${donation.card_bg} cursor-pointer`}
    >
      <div>
        <img className="rounded-md" src={donation.picture} alt="image" />
      </div>
      <div
        className={`px-2 py-1 font-bold mx-2 text-[${donation.category_bg}]`}
      >
        <h1
          className={`bg-[${donation.text_button_bg}] w-[90px] rounded-md text-center`}
        >
          {donation.category}
        </h1>
        <h1>{donation.title}</h1>
      </div>
    </section>
  );
}
