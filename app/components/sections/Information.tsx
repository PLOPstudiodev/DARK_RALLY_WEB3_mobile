import Subtitle from "../Subtitle"


const InformationItem = ({ img, title, desc }: { img: string, title: string, desc: string }) => (

  <div className='grid grid-cols-5 items-center'>
    <div className="col-span-1 bg-[url('/images/information/gamer_list_icon_bg.jpg')] w-[100px] h-[100px] flex justify-center items-center border-[6px] border-[#333240] hover:border-primary ease-in-out duration-300">
      <img src={`./images/information/${img}.png`} alt="" />
    </div>
    <div className='col-span-4 font-bold ml-4'>
      <h3 className='uppercase text-white text-lg'> {title} </h3>
      <p className='text-[#cbcbcb] text-[15px] mt-2 leading-7'>{desc} </p>
    </div>
  </div>
)

const Information = () => {
  return (
    <section className='grid grid-cols-5 py-24'>
      <section className='col-span-2'>
        <div className="flex flex-col gap-4">
          <Subtitle first="BIVOUACS" second="."/>
          <p className="text-sm font-semibold text-[#cbcbcb] leading-7">Dark Rally X Beta version will launch “Bivouacs” (Repair/Enhance Garages), this workshops will increase its value with victories, sponsors, new vehicles and more. Get them as NFTs, “Bivouacs” owners will get additional benefits within the Arcadeland.</p>
          <img src="./images/information/title_bar03.png" alt="" className="w-fit mt-4" />
        </div>
        <div className='flex flex-col gap-10 mt-10'>
          <InformationItem
            title='unique value'
            desc='Bivouacs enhance vehicles better than ingame workshop.'
            img='gamer_list_icon01'
          />
          <InformationItem
            title='BECOME A WORKSHOP SERVICE'
            desc='Provide service to other players or you can “Rent a Bivouac”.'
            img='gamer_list_icon02'
          />
          <InformationItem
            title='TRADE THEM'
            desc='Win championships using your Bivouac and upgrade its value.'
            img='gamer_list_icon03'
          />
        </div>

      </section>
      <section className='col-span-3 relative z-[1]'>
        <img src="./images/information/just_gamers_img.png" alt="" />
      </section>
    </section>
  )
}

export default Information
