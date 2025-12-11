import Image from "next/image";

function page() {
  return (
    <main>
      <h2>Contacts Page</h2>
      <Image src="@/public/" alt="Contact Image" width={500} height={300} />
    </main>
  );
}

export default page;
