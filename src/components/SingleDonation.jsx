import { useLocation, useNavigate } from "react-router-dom";

export default function SingleDonation({ donation }) {
  const navigate = useNavigate();

  const handleNavigateDonatePage = (donation) => {
    navigate(`/donate-now/${donation.id}`);
  };

  return (
    <section
      style={{ backgroundColor: `${donation.card_bg}` }}
      onClick={() => handleNavigateDonatePage(donation)}
      className={`rounded-lg border-2  cursor-pointer`}
    >
      <div>
        <img className="rounded-md" src={donation.picture} alt="image" />
      </div>
      <div
        style={{ color: `${donation.category_bg}` }}
        className={`px-2 py-1 font-bold mx-2 `}
      >
        <h1
          style={{ backgroundColor: `${donation.text_button_bg}` }}
          className={`bg-[${donation.text_button_bg}] w-[90px] rounded-md text-center`}
        >
          {donation.category}
        </h1>
        <h1>{donation.title}</h1>
      </div>
    </section>
  );
}
