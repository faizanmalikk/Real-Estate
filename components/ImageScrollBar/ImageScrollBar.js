// import { Image } from "@chakra-ui/react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Flex,useMediaQuery } from "@chakra-ui/react";

export default function ImageScrollBar({ data }) {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <>
    <Flex width={!isLargerThan400 ? '470px' : '1100px'}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      
    
      >
        {data.map((item,i) => (
          <SwiperSlide key={i}>
            <Box >      
                    <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width='1200px'
              height={500}
             
              
              
            />
            </Box>

          </SwiperSlide>
        ))}
      </Swiper>
      </Flex>
    </>
  );
}
