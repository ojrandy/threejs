import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';


import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        { snap.intro && (
            <motion.section className="home" { ...slideAnimation ('left')}>

                {/** Header Section */}
                <motion.header {...slideAnimation("down")}>
                    <img 
                    src='./threejs.png' 
                    alt="Logo"
                    className="w-8 h-8 object-contain" />
                </motion.header>

                {/** Header-Content Section*/}
                <motion.div className="home-content" {...headContentAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                                LET'S <br className="xxl:block hidden"/> DO IT.
                        </h1>
                    </motion.div>

                    <motion.div 
                    className="flex flex-col gap-5">
                        <p className="max-w-md font-normal text-gray-700 text-base">
                            Create your Unique and exclusive shirt with our brand new 3D customization tool. 
                            <strong> Unleash Your Imagination</strong>{" "}
                            and define your own style.
                        </p>


                        <CustomButton 
                              type="filled"
                              title="Customize It"
                              handleClick={() => state.intro=false}   
                              customStyle = "w-fit px-4 py-2.5 font-bold text-sm"           
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home;







//  Through this code, we use the HTML 5 symantic tags like 
// section, home etc