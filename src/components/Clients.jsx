import { clients } from "../constants";
import styles from "../styles";

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} cursor-pointer transition duration-700 delay-500 ease-in sm:min-w-[192px] min-w-[120px] hover:animate-bounce`}>
            <img
              alt="logo"
              src={client.logo}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
