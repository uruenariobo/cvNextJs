import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[150px] h-[242px] relative">
          <Image
            className="w-[150px] h-[150px] left-0 top-0 absolute rounded-full"
            src="https://s3-alpha-sig.figma.com/img/593a/26ab/93f7491bcef5ff23ce04f6eb7279adf7?Expires=1698019200&Signature=Rt9nx2Kh3mOtYqAA8q29NyGNo4yX26A9Y6Eeh5L7WAlpWZ-fq0hpx8w~e3sf1bizgIkaC1xsGjNwi3o7~XPST~2g6vKapeVGRz2rZtu8KrkrzpOz8wRvLORWkw4r1lfERmWQZIAP8kgK0kTuoMEEj8pr76Bv4s-ItBa1IY1u3M6mhDoTrKjYzcHJ08dTl3UxR1ej1eh-oUWHgXpl~cSm8vH2ABGrKpQYfKujcxvHcLUHisFiVFLIjvn5tDW2qsLGEGXw6~dVoq6orKE-mgdBW~0kM7u5P2Vp1wRI9VMLjuVCJ6E5l4SkYtGjg60h-U-Ep2o4G06vRMB4AjwNVvp4cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Profile Image"
            width={150} // Ancho de la imagen
            height={150} // Alto de la imagen
          />
          <div className="nombre-sidebar left-[3px] top-[181px] absolute text-center leading-snug">
            Miguel Urueña
          </div>
          <div className="descripcion-sidebar left-[4px] top-[218px] absolute text-center leading-normal">
            Backend Developer
          </div>
          <div className="w-4 h-4 left-[124px] top-[116px] absolute bg-lime-500 rounded-full shadow" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
