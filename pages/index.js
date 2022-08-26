import Head from 'next/head'
import { useState } from 'react'
import {MenuOutlined, CloseOutlined, SettingFilled} from '@ant-design/icons'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import styles from '../styles/Home.module.css'
import { Box, Button, Collapse, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function Home() {
  const [propertySearch, setPropertySearch] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [openPSDrawer,setOpenPSDrawer] = useState(false)
  const [switchPropertyType, setSwitchPropertyType] = useState(true)
  const [propertyPurpose, SetpropertyPurpose] = useState("Residential")
  const propertyTypes = [{
    name: "Apartment",
    ApartmentIcon: ApartmentIcon
  },
  {
    name: "Villa",
    ApartmentIcon: ApartmentIcon
  },
  {
    name: "Townhouse",
    ApartmentIcon: ApartmentIcon
  },
  {
    name: "Penthouse",
    ApartmentIcon: ApartmentIcon
  },
  {
    name: "Villa Compound",
    ApartmentIcon: ApartmentIcon
  },
  {
    name: "Hotel Compound",
    ApartmentIcon: ApartmentIcon
  }
] 
  const handleClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <div>
      <Head>
        <title>Bayut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer anchor='bottom' open={openPSDrawer}>
        <Box sx={{width: "auto"}} role="presentation" className="h-[100vh] relative px-2">
        <div className='h-14 relative py-2'>
          <ArrowBackIosIcon className='absolute left-3' color='' onClick={() => setOpenPSDrawer(false)}/>
          <img src="/bayut_logo.png" className='absolute h-[50%] w-20 m-auto left-0 right-0'/>
          <CancelPresentationIcon className='absolute right-3' onClick={() => setOpenPSDrawer(false)}/>
        </div>
        <div className='m-auto mb-6 border left-0 rounded right-0 bg-h_b w-full h-10 grid grid-flow-col grid-cols-2 gap-1 p-1'>
          <button style={switchPropertyType ? {backgroundColor: "rgb(134 239 172)", color: "rgb(22 163 74)"} : {color: "rgba(34,34,34,.75)"}} onClick={() => setSwitchPropertyType(true)} className='w-[100%] rounded h-full text-white font-semibold'>Buy</button>
          <button style={switchPropertyType ? {color: "rgba(34,34,34,.75)"} : {backgroundColor: "rgb(134 239 172)", color: "rgb(22 163 74)"}} onClick={() => setSwitchPropertyType(false)} className='w-[100%] rounded h-full font-semibold text-white'>Rent</button>
        </div>
        {switchPropertyType ? 
        <div>
          <h1 className='font-semibold text-xs mb-2'>Location</h1>
          <input placeholder='e.g. Marina Diamonds' className='w-full rounded border mb-2 h-8 p-2'/>
          <img src="/commute_banner.svg" className='w-full h-32 rounded-lg mb-4'/>
          <h1 className='font-semibold text-xs mb-2'>Property Type</h1>
          <div className='m-auto mb-6 border left-0 rounded right-0 bg-h_b w-full h-10 grid grid-flow-col grid-cols-2 gap-1 p-1'>
          <button style={propertyPurpose === "Residential" ? {backgroundColor: "rgb(134 239 172)", color: "rgb(22 163 74)"} : {color: "rgba(34,34,34,.75)"}} onClick={() => SetpropertyPurpose("Residential")} className='w-[100%] fill-transparent rounded h-full text-white font-semibold'>Residential</button>
          <button style={propertyPurpose === "Commercial" ? {backgroundColor: "rgb(134 239 172)", color: "rgb(22 163 74)"} : {color: "rgba(34,34,34,.75)"}} onClick={() => SetpropertyPurpose("Commercial")} className='w-[100%] fill-transparent rounded h-full font-semibold text-white'>Commercial</button>
        </div>
        {
          propertyPurpose === "Residential" ? 
          <div className='flex mb-5 gap-4 overflow-x-scroll '>
            {propertyTypes.map((property, index) => (
              <div key={index} className='flex flex-shrink-0 flex-col w-20 text-center items-center justify-start'>
              <property.ApartmentIcon />
              <h3>{property.name}</h3>
            </div>
            )
            )}
          </div> :
            <div className='flex mb-5 gap-4 overflow-x-scroll '>
              {propertyTypes.map((property, index) => (
                <div key={index} className='flex flex-shrink-0 flex-col w-20 text-center items-center justify-start'>
                  <property.ApartmentIcon />
                  <h3>{property.name}</h3>
                </div>
                )
                )}
            </div>

        }
         <h1 className='font-semibold text-xs mb-2'>Completion Status</h1>
         <div className='flex w-[60%] h-7 mb-2'>
          <div className='w-[30%] bg-green-300 mr-3 text-sm p-1 text-center border rounded-xl'>All</div>
          <div className='w-[30%] text-sm p-1 mr-3 text-center border rounded-xl'>Ready</div>
          <div className='w-[40%] text-sm p-1 text-center border rounded-xl'>Off-Plan</div>
         </div>
         <h1 className='font-semibold text-xs mb-2'>Beds</h1>
         <div className='flex flex-shrink-0 gap-3 overflow-x-scroll h-7 mb-2'>
          <div className='bg-green-300 text-sm px-3 py-1 text-center border rounded-xl'>Studio</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>1</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>2</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>3</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>4</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>5</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>6</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>7</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>8+</div>
         </div>
         <h1 className='font-semibold text-xs mb-2'>Baths</h1>
         <div className='flex flex-shrink-0 gap-3 overflow-x-scroll h-7 mb-2'>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>1</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>2</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>3</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>4</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>5</div>
          <div className='text-sm px-3 py-1 h-full  border rounded-xl'>6+</div>
         </div>
         <h1 className='font-semibold text-xs mb-2'>Price</h1>
         {/* <div className='grid grid-flow-row gap-2 grid-rows-2'> */}
          <div className='grid grid-flow-cols gap-2 mb-2 grid-cols-2'>
            <div className='flex flex-col space-y-2 text-xs justify-start'>
              <h1>Minimum</h1>
              <input placeholder='0 AED' className='border p-2'/>
            </div>
            <div className='flex flex-col space-y-2 text-xs justify-start'>
              <h1>Maximum</h1>
              <input placeholder='0 AED' className='border p-2'/>
            </div>
          </div>
          <h1 className='font-semibold text-xs mb-2'>Area</h1>
          <div className='grid grid-flow-cols mb-2 grid-cols-2'>
            <div className='flex flex-col space-y-2 text-xs justify-start'>
              <h1>Minimum</h1>
              <input placeholder='0 AED' className='border p-2'/>
            </div>
            <div className='flex flex-col space-y-2 text-xs justify-start'>
              <h1>Maximum</h1>
              <input placeholder='0 AED' className='border p-2'/>
            </div>
          </div>
          <div className='grid grid-flow-col grid-cols-7 gap-5 w-full bottom-0 sticky bg-white p-3'>
            <button className='border col-span-2 font-semibold border-green-900 text-green-900 rounded'>Reset</button>
            <button className='col-span-5 rounded bg-green-900 text-white'>Find</button>
          </div>
         {/* </div> */}
        </div>
        :
        <div>Rent</div>
        }
        </Box>
      </Drawer>
      <Drawer anchor='left' open={openDrawer}>
        <Box sx={{width: 250}} role="presentation" className='flex flex-col justify-center items-center p-3'>
          <div className='flex justify-between w-[100%] mb-10'>
            <SettingFilled />
          <CloseOutlined onClick={() => setOpenDrawer(!openDrawer)} />
          </div>
          <Button className='text-white font-semibold w-[100%] bg-green-900'>Signup or Login</Button>
          <List disablePadding className='w-[100%]' component="nav">
            {["Blog","Find an Agency","Floor Plans","Guides","Market Intelligence","Agent Portal","Events","Careers","Comapany"].map((text, key) => (
              [4,5,7,9].includes(key) ? 
              <ListItem disablePadding disableGutters key={key} sx={{ width: '100%'}}>
                <ListItemButton disableGutters onClick={handleClick}>
                  <ListItemText primary={text} />
                  {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                {/* <List component="div" disablePadding>
                  <ListItem disablePadding disableGutters>
                  <ListItemButton disableGutters>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                  </ListItem>
                </List> */}
              </Collapse>
              </ListItem> : 
              <ListItem key={key} disablePadding disableGutters>
              <ListItemButton disableGutters>
              <ListItemText primary={text}/>
              </ListItemButton>
              </ListItem>
            ))}
            <Divider className='mb-3'/>
              <div>
                <h2>Download the Bayut app:</h2>
                {/* <img src='/play_store.png' className='w-16 h-14'/> */}
              </div>
            <Divider />
            <ListItem disablePadding disableGutters>
              <ListItemButton disableGutters>
              <ListItemText primary={"Change Country"}/>
              {openSubMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubMenu} timeout="auto" unmountOnExit></Collapse>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <header className='w-full relative md:h-96 sm:h-[65vh] mb-10'>
      <img src={"/homepage_header.jpg"} className='absolute md:w-[98%] md:rounded-xl h-full left-0 right-0 ml-auto mr-auto'/>
      <MenuOutlined style={{color: "white"}} className='md:hidden sm:absolute top-2 left-2 w-5 h-5' onClick={() => setOpenDrawer(true)}/>
      <img className='md:hidden sm:absolute right-0 m-auto top-2 left-0 w-5 h-5' src='/bayut_logo.png'/>
      <div className='md:hidden sm:grid sm:grid-flow-row gap-5 content-center sm:grid-rows-2 text-white py-2 px-2 text-center sm:absolute bottom-0 bg-black h-[30%] w-full'>
        <div className='px-8 font-semibold'>
        <h1>Search properties for sale and to rent in the UAE</h1>
        </div>
        <div className='grid grid-flow-col grid-cols-2 gap-2 px-3'>
          <button onClick={() => setOpenPSDrawer(true)} className='bg-green-500 h-[80%] rounded text-sm font-semibold'>Property Search</button>
          <button className='bg-green-500 h-[80%] rounded text-sm font-semibold'>Try Value&#8482;</button>
        </div>
      </div>
      <div className='absolute sm:hidden mr-auto ml-auto mt-20 left-0 text-center right-0 w-[60%] '>
        <h1 className='text-3xl font-medium drop-shadow-2xl mb-6 text-white'>Search properties for sale and to rent in the UAE</h1>
        <div className='m-auto mb-6 left-0 fill-transparent bg-hb rounded right-0 bg-h_b w-[40%] h-14 grid grid-flow-col grid-cols-2 gap-2 p-2'>
          <button style={propertySearch ? {backgroundColor: "white", color: "rgba(34,34,34,.75)"} : {color: "white"}} onClick={() => setPropertySearch(true)} className='w-[100%] rounded h-full text-white font-semibold'>Property Search</button>
          <button style={propertySearch ? {color: "white"} : {backgroundColor: "white", color: "rgba(34,34,34,.75)"}} onClick={() => setPropertySearch(false)} className='w-[100%] rounded h-full font-semibold text-white'>TruValue&#8482;</button>
        </div>
        {propertySearch ? 
        <div className="fill-transparent w-[90%] m-auto left-0 right-0 bg-hb h-48 rounded-lg p-3 grid grid-flow-row grid-rows-3 gap-3">
          <div className='grid grid-flow-col grid-cols-3 gap-3'>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
            <input className='rounded-lg p-2 h-12 col-span-2' placeholder='Rent'/>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
          </div>
          <div className='grid grid-flow-col grid-cols-3 gap-3'>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
          </div>
          <div className='grid grid-flow-col grid-cols-1 gap-3'>
            <input className='rounded-lg p-2 h-12' placeholder='Rent'/>
          </div>
        </div> : 
        <div>
         Try a value
        </div>}
      </div>
      </header>
      <div className='md:grid md:grid-flow-col md:m-auto md:left-0 md:right-0 md:grid-cols-3 md:max-w-[80%] gap-4 sm:grid sm:grid-flow-row sm:grid-rows-3'>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 border sm:flex'>
            <img className='md:absolute rounded-lg md:w-[100%]' src='/TruCheck.svg'/>
            <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>TruCheck&#8482;</h1>
            <p className='md:w-[80%] sm:text-xs'>Filter your result with validated, available listings</p>
            </div>
            <div className='sm:m-auto md:hidden sm:left-0 sm:right-0'>&gt;</div>
          </div>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 border sm:flex'>
          <img className='md:absolute rounded-lg md:w-[100%]' src='/Search2.svg'/>
          <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>Search 2.0 <span className='rounded-2xl bg-red-600 text-white px-2'><span className='text-xs'>NEW</span></span></h1>
            <p className='sm:text-xs'>Find homes by commute time</p>
          </div>
          <div className='sm:m-auto md:hidden sm:left-0 sm:right-0'>&gt;</div>
          </div>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 border sm:flex'>
          <img className='md:absolute rounded-lg md:w-[100%]' src='/map_view.svg'/>
          <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>Map View</h1>
            <p className='sm:text-xs'>Search for properties in preferred areas using a map</p>
          </div>
          <div className='sm:m-auto md:hidden sm:left-0 sm:right-0'>&gt;</div>
          </div>
      </div>
    </div>
  )
}
