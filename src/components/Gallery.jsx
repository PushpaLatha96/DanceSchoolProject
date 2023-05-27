import React, { useState } from 'react'
import "./Gallery.css"
import {ImCross} from 'react-icons/im';
import Title from './Title';

const Gallery = () => {

    let data =[
        {
            id:1,
            imgSrc:'https://t3.ftcdn.net/jpg/04/64/66/34/360_F_464663425_v5Lp8JqA1dfciwy6fxQnRxdTYkDltoBg.jpg',
        }, 
        {
            id:2,
            imgSrc:'https://t4.ftcdn.net/jpg/01/13/23/03/240_F_113230305_NmuChOtYMwMCGrOMFdFA6GT1iN7WjF1x.jpg',
        }, 
        {
            id:3,
            imgSrc:'https://t3.ftcdn.net/jpg/03/31/12/98/240_F_331129823_5idvGx4Fq8UpxvVzaoQLlOhN8L7pETPA.jpg',
        }, 
        {
            id:4,
            imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuchipudi_Performer_DS.jpg/800px-Kuchipudi_Performer_DS.jpg',
        },
         {
            id:5,
            imgSrc:'https://t4.ftcdn.net/jpg/04/33/61/17/240_F_433611739_URg0fSjQ2T8r2AF3mnlTPwDb31DQlpV6.jpg',
        }, 
        {
            id:6,
            imgSrc:'https://static.wixstatic.com/media/462fea_be8318b7e050407ebc09cacb4e456976~mv2.jpg/v1/fill/w_490,h_406,al_c,lg_1,q_80/462fea_be8318b7e050407ebc09cacb4e456976~mv2.jpg',

        },
        {
            id:7,
            imgSrc:'https://i.pinimg.com/originals/1a/91/c6/1a91c64604d50ca5c72b203b9f780655.jpg',


        },{
            id:8,
            imgSrc:'https://t3.ftcdn.net/jpg/00/62/40/66/240_F_62406685_QgWkorPS5qaFxSuLFJTEKVGiBPSk2IjJ.jpg',

        },{
            id:9,
            imgSrc:'https://t3.ftcdn.net/jpg/03/73/80/90/240_F_373809049_Oos2i52y5SNUSbchu63BbcZbcbrfEMdT.jpg',
        },
        {
            id:10,
            imgSrc:'https://t4.ftcdn.net/jpg/03/74/31/05/240_F_374310517_Yvx1xLkjLvPqpaMyn1d1Q9MmvFseJQIh.jpg',


        },{
            id:11,
            imgSrc:'https://t4.ftcdn.net/jpg/04/89/79/47/240_F_489794750_S2noS7Y376CPTGH6M6INtI6rycpZNKcV.jpg',

        },{
            id:12,
            imgSrc:'https://i.ytimg.com/vi/bSkkREf1w9Y/sddefault.jpg',
        },
        {
            id:13,
            imgSrc:'https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2017/10/sahana1.jpg?fit=720%2C480&ssl=1',
        },
        
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] =useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <section id="Gallery">
    <Title value="Gallery" />
    <div className={model? "model open" : "model"} >
        <img src={tempimgSrc} alt="" />
        <ImCross  onClick={() => setModel(false)}/>


    </div>


    <div className='gallery'>
        {data.map((item, index)=>{
            return(
                <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="img" style={{width:'100%'}}/>
                </div>
            )
        })}
    </div>
    </section>
    </>
  )
}

export default Gallery

