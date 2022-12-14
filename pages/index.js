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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
  const [propertySearch, setPropertySearch] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [openPSDrawer,setOpenPSDrawer] = useState(false)
  const [switchPropertyType, setSwitchPropertyType] = useState(true)
  const [propertyPurpose, setPropertyPurpose] = useState("Residential")
  const residentialPropertyTypes = [{
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
const commercialPropertyTypes = [{
  name: "Office",
  ApartmentIcon: ApartmentIcon
},
{
  name: "Shop",
  ApartmentIcon: ApartmentIcon
},
{
  name: "Warehouse",
  ApartmentIcon: ApartmentIcon
},
{
  name: "Labour Camp",
  ApartmentIcon: ApartmentIcon
},
{
  name: "Commercial Villa",
  ApartmentIcon: ApartmentIcon
},
{
  name: "Bulk Unit",
  ApartmentIcon: ApartmentIcon
}
] 
const [sideBarMenu, setSideSubMenu] = useState([{name: "Blog", collapse: false},{name: "Find an Agency", collapse: false},{name: "Floor Plans", collapse: false},{name: "Guides", collapse: false},{name: "Market Intelligence", collapse: false},{name: "Agent Portal", collapse: false},{name: "Events", collapse: false},{name: "Careers", collapse: false},{name: "Comapany", collapse: false}])
const [propertySearchMenuItems, setPropertySearchMenuItems] = useState([{name: "Rent", collapse: false},{name: "Residential", collapse: false},{name: "Beds & Baths", collapse: false},{name: "Area (sqft)", collapse: false},{name: "Price (AED)", collapse: false}])
  const handleSideBarMenuItemsClick = ({name, collapse}) => {
    const menuItem = sideBarMenu.find((item) => item.name === name)
    setSideSubMenu(sideBarMenu => sideBarMenu.map(item => {if (item.name === menuItem.name) {
      item.collapse = !menuItem.collapse
    }
      return item
    }))
    console.log(sideBarMenu)
  };
  const handlePropertySearchItemsClick = (name, collapse) => {
    const menuItem = propertySearchMenuItems.find((item) => item.name === name)
    setPropertySearchMenuItems(propertySearchMenuItems => propertySearchMenuItems.map(item => {if (item.name === menuItem.name) {
      item.collapse = !menuItem.collapse
      }
      return item
      })
    )
    console.log(propertySearchMenuItems)
  }
  const changepropertySearchMenuItemName = (e, name) => {
    const menuItem = propertySearchMenuItems.find((item) => item.name === name)
    setPropertySearchMenuItems(propertySearchMenuItems => propertySearchMenuItems.map(item => {if (item.name === menuItem.name) {
      item.name = e.target.value
      }
      return item
      })
    )
    console.log(propertySearchMenuItems)
  }
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
          <button style={switchPropertyType ? {backgroundColor: "#e9f7f0", color: "#28b16d"} : {color: "rgba(34,34,34,.75)"}} onClick={() => setSwitchPropertyType(true)} className='w-[100%] rounded h-full text-white font-semibold'>Buy</button>
          <button style={switchPropertyType ? {color: "rgba(34,34,34,.75)"} : {backgroundColor: "#e9f7f0", color: "#28b16d"}} onClick={() => setSwitchPropertyType(false)} className='w-[100%] rounded h-full font-semibold text-white'>Rent</button>
        </div>
        {switchPropertyType ? 
        <div>
          <h1 className='font-semibold text-xs mb-2'>Location</h1>
          <input placeholder='e.g. Marina Diamonds' className='w-full rounded border mb-2 h-8 p-2'/>
          <img src="/commute_banner.png" className='w-full h-32 rounded-lg mb-4'/>
          <h1 className='font-semibold text-xs mb-2'>Property Type</h1>
          <div className='m-auto mb-6 border left-0 rounded right-0 bg-h_b w-full h-10 grid grid-flow-col grid-cols-2 gap-1 p-1'>
          <button style={propertyPurpose === "Residential" ? {backgroundColor: "#e9f7f0", color: "#28b16d"} : {color: "rgba(34,34,34,.75)"}} onClick={() => setPropertyPurpose("Residential")} className='w-[100%] fill-transparent rounded h-full text-white font-semibold'>Residential</button>
          <button style={propertyPurpose === "Commercial" ? {backgroundColor: "#e9f7f0", color: "#28b16d"} : {color: "rgba(34,34,34,.75)"}} onClick={() => setPropertyPurpose("Commercial")} className='w-[100%] fill-transparent rounded h-full font-semibold text-white'>Commercial</button>
        </div>
        {
          propertyPurpose === "Residential" ? 
          <div className='flex mb-5 gap-4 overflow-x-scroll '>
            {residentialPropertyTypes.map((property, index) => (
              <div key={index} className='flex flex-shrink-0 flex-col w-20 text-center items-center justify-start'>
              <property.ApartmentIcon />
              <h3>{property.name}</h3>
            </div>
            )
            )}
          </div> :
            <div className='flex mb-5 gap-4 overflow-x-scroll '>
              {commercialPropertyTypes.map((property, index) => (
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
          <div style={{borderColor: "#28b16d", color: "#28b16d", backgroundColor: "#e9f7f0"}} className='w-[30%] mr-3 text-sm p-1 text-center border rounded-xl'>All</div>
          <div className='w-[30%] text-sm p-1 mr-3 text-center border rounded-xl'>Ready</div>
          <div className='w-[40%] text-sm p-1 text-center border rounded-xl'>Off-Plan</div>
         </div>
         <h1 className='font-semibold text-xs mb-2'>Beds</h1>
         <div className='flex flex-shrink-0 gap-3 overflow-x-scroll h-7 mb-2'>
          <div style={{borderColor: "#28b16d", color: "#28b16d", backgroundColor: "#e9f7f0"}} className='text-sm px-3 py-1 text-center border rounded-xl'>Studio</div>
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
          <button className='text-white h-8 rounded mb-4 font-semibold w-[100%] bg-green-900'>Signup or Login</button>
          <List disablePadding className='w-[100%]' component="nav">
            {sideBarMenu.map((item, key) => (
              [3,4,6,8].includes(key) ? 
              <>
              <ListItem disablePadding disableGutters key={key} sx={{ width: '100%'}}>
                <ListItemButton disableGutters onClick={() => handleSideBarMenuItemsClick({name: item.name, collapse: item.collapse})}>
                  <ListItemText primary={item.name} className="font-bold" />
                  {item.collapse ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </ListItem>                
              <Collapse in={item.collapse}  timeout={500} unmountOnExit>
                <List component="div" disablePadding>
                  {key === 3 &&
                  <>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Area Guides" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Building Guides" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="School Guides" className='ml-1'/>
                  </ListItem>
                  </>
                  }
                  {key === 4 &&
                  <>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary={<h1>TruValue&#8482;</h1>} className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Property Prices" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary={<h1>Dubai Transactions{" "}<span className='rounded-lg bg-red-200 text-red-600 font-bold mr-3 px-2'><span className='text-xs'>NEW</span></span></h1>} className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="New Projects" className='ml-1'/>
                  </ListItem>
                  </>
                  }
                  {key === 6 &&
                  <>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="B3DXB 2022" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Your Home Your Choice" className='ml-1'/>
                  </ListItem>
                  </>
                  }
                   {key === 8 &&
                  <>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="About Us" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Contact Us" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Terms Of Use" className='ml-1'/>
                  </ListItem>
                  <ListItem button disablePadding disableGutters>
                    <ListItemText primary="Privacy Policy" className='ml-1'/>
                  </ListItem>
                  </>
                  }
                </List>
              </Collapse>
              </> : 
              <ListItem key={key} disablePadding disableGutters>
              <ListItemButton disableGutters>
              <ListItemText primary={item.name}/>
              </ListItemButton>
              </ListItem>
            ))}
            <Divider className='mb-3'/>
              <div>
                <h2>Download the Bayut app:</h2>
                <img src='/google.svg' className='w-28 h-14'/>
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
          <div className='grid grid-flow-col grid-cols-4 gap-3'>
            <ListItem className='rounded-lg relative h-12 bg-white p-3' disablePadding disableGutters sx={{ width: '100%'}}>
              <ListItemButton disableGutters onClick={() => handlePropertySearchItemsClick(propertySearchMenuItems[0].name,false)}>
                <ListItemText primary={propertySearchMenuItems[0].name} />
                {propertySearchMenuItems[0].collapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {propertySearchMenuItems[0].collapse &&
              <div className="absolute bg-white flex w-[160%] rounded-lg top-[60px] left-0 shadow-xl z-10 flex-col p-3">
                <h1 className="font-bold mb-2 text-[#4c4a4a]">Purpose</h1>
                <div className='m-auto mb-6 border left-0 right-0 bg-h_b w-full h-10 grid grid-flow-col grid-cols-2 gap-1 p-1'>
                <button style={propertySearchMenuItems[0].name === "Buy" ? {backgroundColor: "#e9f7f0", color: "#28b16d"} : {color: "rgba(34,34,34,.75)"}} value="Buy" onClick={(e) => changepropertySearchMenuItemName(e,"Rent")} className='w-[100%] fill-transparent rounded h-full text-white font-semibold'>Buy</button>
                <button style={propertySearchMenuItems[0].name === "Rent" ? {backgroundColor: "#e9f7f0", color: "#28b16d"} : {color: "rgba(34,34,34,.75)"}} value="Rent" onClick={(e) => changepropertySearchMenuItemName(e,"Buy")} className='w-[100%] fill-transparent rounded h-full font-semibold text-white'>Rent</button>
              </div>
              {propertySearchMenuItems[0].name === "Buy" ? 
                <div className='flex flex-col'>
                  <h1 className="font-bold mb-2 text-[#4c4a4a]">Completion Status</h1>
                  <div className='flex h-7 mb-4'>
                  <div style={{borderColor: "#28b16d", color: "#28b16d", backgroundColor: "#e9f7f0"}} className='w-[30%] mr-3 text-sm font-semibold p-1 text-center border rounded-2xl'>All</div>
                  <div className='w-[30%] text-sm p-1 mr-3 text-center font-medium text-gray-400 border rounded-2xl'>Ready</div>
                  <div className='w-[40%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Off-Plan</div>
                </div>
                </div> : 
                <div className='flex flex-col'>
                <h1 className="font-bold mb-2 text-[#4c4a4a]">Rent Frequency</h1>
                <div className='flex gap-2 mb-4 flex-wrap'>
                  <div style={{borderColor: "#28b16d", color: "#28b16d", backgroundColor: "#e9f7f0"}} className='w-[30%] mr-1 text-sm font-medium text-gray-400 p-1 text-center border rounded-2xl'>Yearly</div>
                  <div className='w-[30%] text-sm p-1 mr-5 text-center font-medium text-gray-400 border rounded-2xl'>Monthly</div>
                  <div className='w-[30%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Weekly</div>
                  <div className='w-[25%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Daily</div>
                  <div className='w-[20%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Any</div>
                </div>
                </div>
              }
              <div className='m-auto w-full h-12 grid grid-flow-col grid-cols-2 gap-2 py-1'>
                <button className='w-[100%] rounded-lg h-full border font-semibold' style={{borderColor: "#006169", color: "#006169"}}>Reset</button>
                <button className='w-[100%] rounded-lg h-full font-semibold text-white' style={{backgroundColor: "#006169"}}>Done</button>
              </div>
              </div>}
            </ListItem>
            <div className='rounded-lg relative h-12 col-span-2'>
            <input placeholder='Enter Location' className='rounded-lg p-2 absolute h-full m-auto left-0 right-0'/>
            <LocationOnIcon style={{color: "rgb(75 85 99)"}} className='absolute right-4 h-[100%]'/>
            </div>
            <ListItem className='rounded-lg relative h-12 bg-white p-3' disablePadding disableGutters sx={{ width: '100%'}}>
              <ListItemButton disableGutters onClick={() => handlePropertySearchItemsClick(propertySearchMenuItems[1].name, false)}>
                <ListItemText primary={propertySearchMenuItems[1].name} />
                {propertySearchMenuItems[1].collapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {propertySearchMenuItems[1].collapse && 
              <div className="absolute bg-white flex w-[210%] rounded-lg top-[60px] right-0 shadow-xl z-10 flex-col p-3">
                <div className="flex h-8 border-b-[0.5px] border-solid z-0 border-[#767676] mb-5">
                <button className='w-[100%] h-full font-medium z-10' style={propertyPurpose === "Residential" ? {borderBottomColor: "#28b16d", color: "#28b16d", borderBottomWidth: "1.5px", fontWeight: 500} : {color: "#767676"}} onClick={() => setPropertyPurpose("Residential")}>Residential</button>
                <button className='w-[100%] h-full font-medium z-10' style={propertyPurpose === "Commercial" ? {borderBottomColor: "#28b16d", color: "#28b16d", borderBottomWidth: "1.5px", fontWeight: 500} : {color: "#767676"}} onClick={() => setPropertyPurpose("Commercial")}>Commercial</button>
                </div>
                {propertyPurpose === "Residential" ? 
                <div className='flex flex-wrap gap-3 mb-5'>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Apartment</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Villa</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Townhouse</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Penthouse</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Villa Compound</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Hotel Apartment</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Residential Plot</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Residential Floor</div>
                  <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Residential Building</div>
                </div> :
                <div className='flex flex-wrap gap-3 mb-5'>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Office</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Shop</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Warehouse</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Labour Camp</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Commercial Villa</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Bulk Unit</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Commercial Plot</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Commercial Floor</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Commercial Building</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Factory</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Industrial Land</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Mixed Used Land</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Showroom</div>
                <div className='w-[48%] text-sm p-1 text-center font-medium text-gray-400 border rounded-2xl'>Other Commercial</div>
              </div>}
                <div className='m-auto w-full h-12 grid grid-flow-col grid-cols-2 gap-2 py-1'>
                <button className='w-[100%] rounded-lg h-full border font-semibold' style={{borderColor: "#006169", color: "#006169"}}>Reset</button>
                <button className='w-[100%] rounded-lg h-full font-semibold text-white' style={{backgroundColor: "#006169"}}>Done</button>
              </div>
                </div>}
            </ListItem> 
          </div>
          <div className='grid grid-flow-col grid-cols-4 gap-3'>
            <ListItem className='rounded-lg relative h-12 bg-white p-3' disablePadding disableGutters sx={{ width: '100%'}}>
              <ListItemButton disableGutters onClick={() => handlePropertySearchItemsClick(propertySearchMenuItems[2].name, false)}>
                <ListItemText primary={propertySearchMenuItems[2].name} />
                {propertySearchMenuItems[2].collapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {propertySearchMenuItems[2].collapse && <div className="absolute bg-white flex w-[210%] rounded-lg top-[60px] right-0 shadow-xl z-10 flex-col p-3">
                <div className="flex flex-col gap-x-3">
                  <h1 className="font-bold mb-2 text-[#4c4a4a]">Beds</h1>
                  <div className='flex flex-wrap gap-3 mb-2'>
                    <div className='bg-[#e9f7f0] text-[#28b16d] text-sm px-3 py-1 text-center border rounded-xl'>Studio</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>1</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>2</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>3</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>4</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>5</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>6</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>7</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>8+</div>
                  </div>
                </div>
                <div className="flex flex-col gap-x-3">
                  <h1 className="font-bold mb-2 text-[#4c4a4a]">Baths</h1>
                  <div className='flex flex-wrap gap-3 mb-2'>
                    <div className='text-sm px-5 py-1 h-full bg-[#e9f7f0] text-[#28b16d] border rounded-2xl'>1</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>2</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>3</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>4</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>5</div>
                    <div className='text-sm px-5 py-1 h-full  border rounded-2xl'>6+</div>
                  </div>
                </div>
              <div className='m-auto w-full h-12 grid grid-flow-col grid-cols-2 gap-2 py-1'>
                <button className='w-[100%] rounded-lg h-full border font-semibold' style={{borderColor: "#006169", color: "#006169"}}>Reset</button>
                <button className='w-[100%] rounded-lg h-full font-semibold text-white' style={{backgroundColor: "#006169"}}>Done</button>
              </div>
              </div>}
            </ListItem> 
            <ListItem className='rounded-lg relative h-12 bg-white p-3' disablePadding disableGutters sx={{ width: '100%'}}>
              <ListItemButton disableGutters onClick={() => handlePropertySearchItemsClick(propertySearchMenuItems[3].name, false)}>
                <ListItemText primary={propertySearchMenuItems[3].name} />
                {propertySearchMenuItems[3].collapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {propertySearchMenuItems[3].collapse && <div className="absolute bg-white flex w-[210%] rounded-lg top-[60px] right-0 shadow-xl z-10 flex-col p-3">
              <div className='grid grid-flow-cols gap-2 mb-2 grid-cols-2'>
                <div className='flex flex-col space-y-2 text-sm text-[#767676] justify-start'>
                  <h1>Minimum sqft</h1>
                  <input placeholder='0' className='border p-2 rounded-lg'/>
                </div>
                <div className='flex flex-col space-y-2 text-sm text-[#767676] justify-start'>
                  <h1>Maximum sqft</h1>
                  <input placeholder='Any' className='border p-2 rounded-lg'/>
                </div>
              </div>
              <div className='m-auto w-full h-12 grid grid-flow-col grid-cols-2 gap-2 py-1'>
                <button className='w-[100%] rounded-lg h-full border font-semibold' style={{borderColor: "#006169", color: "#006169"}}>Reset</button>
                <button className='w-[100%] rounded-lg h-full font-semibold text-white' style={{backgroundColor: "#006169"}}>Done</button>
              </div>
              </div>}
            </ListItem> 
            <ListItem className='rounded-lg relative h-12 bg-white p-3' disablePadding disableGutters sx={{ width: '100%'}}>
              <ListItemButton disableGutters onClick={() => handlePropertySearchItemsClick(propertySearchMenuItems[4].name, false)}>
                <ListItemText primary={propertySearchMenuItems[4].name} />
                {propertySearchMenuItems[4].collapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {propertySearchMenuItems[4].collapse && <div className="absolute bg-white flex w-[210%] rounded-lg top-[60px] right-0 shadow-xl z-10 flex-col p-3">
              <div className='grid grid-flow-cols gap-2 mb-2 grid-cols-2'>
                <div className='flex flex-col space-y-2 text-sm text-[#767676] justify-start'>
                  <h1>Minimum</h1>
                  <input placeholder='0' className='border p-2 rounded-lg'/>
                </div>
                <div className='flex flex-col space-y-2 text-sm text-[#767676] justify-start'>
                  <h1>Maximum</h1>
                  <input placeholder='Any' className='border p-2 rounded-lg'/>
                </div>
              </div>
              <div className='m-auto w-full h-12 grid grid-flow-col grid-cols-2 gap-2 py-1'>
                <button className='w-[100%] rounded-lg h-full border font-semibold' style={{borderColor: "#006169", color: "#006169"}}>Reset</button>
                <button className='w-[100%] rounded-lg h-full font-semibold text-white' style={{backgroundColor: "#006169"}}>Done</button>
              </div>
              </div>}
            </ListItem> 
            <button className='text-white bg-green-500 rounded-lg font-semibold' >Find</button>
          </div>
          <div className='grid grid-flow-col grid-cols-1'>
          <div className='rounded-lg relative w-full h-12'>
            <img src="/commute_banner.svg" className='rounded-lg absolute h-full m-auto left-0 right-0'/>
            <div className='h-full p-3'>
            <h1 className="absolute h-full left-6"><span className='rounded-2xl bg-red-600 text-white mr-3 px-2 py-1'><span className='text-xs'>NEW</span></span>{" "}<span className='font-bold text-gray-700 mr-3'>Search 2.0</span>{" "}<span>Find homes by commute time</span><ArrowForwardIosIcon className='w-3 ml-4'/></h1>
            </div>
            </div>
          </div>
        </div> : 
        <div>
         Try a value
        </div>}
      </div>
      </header>
      <div className='md:grid md:grid-flow-col md:m-auto md:left-0 md:right-0 md:grid-cols-3 md:max-w-[80%] gap-4 sm:grid sm:grid-flow-row sm:grid-rows-3 md:mb-5'>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 sm:flex'>
            <img className='md:absolute rounded-lg md:w-[100%] md:h-[300px]' src='/TruCheck.svg'/>
            <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 sm:w-[90%] md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>TruCheck&#8482;</h1>
            <p className='md:w-[80%] sm:text-xs'>Filter your result with validated, available listings</p>
            </div>
            <div className='sm:m-auto md:hidden sm:left-0 sm:w-[10%] sm:right-0'>&gt;</div>
          </div>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 sm:flex'>
          <img className='md:absolute rounded-lg md:w-[100%] md:h-[300px]' src='/Search2.png'/>
          <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 sm:w-[90%] md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>Search 2.0 <span className='rounded-2xl bg-red-600 text-white px-3 pb-1'><span className='text-xs'>NEW</span></span></h1>
            <p className='sm:text-xs'>Find homes by commute time</p>
          </div>
          <div className='sm:m-auto md:hidden sm:left-0 sm:w-[10%] sm:right-0'>&gt;</div>
          </div>
          <div className='rounded md:relative md:h-[300px] sm:h-[100px] sm:mx-2 sm:flex'>
          <img className='md:absolute rounded-lg md:w-[100%] md:h-[300px]' src='/map_view.svg'/>
          <div className='md:absolute sm:p-2 sm:pt-4 md:mt-5 sm:w-[90%] md:left-5 md:w-[60%]'>
            <h1 style={{color: "#222"}} className='font-semibold md:text-2xl md:mb-5 sm:mb-2'>Map View</h1>
            <p className='sm:text-xs'>Search for properties in preferred areas using a map</p>
          </div>
          <div className='sm:m-auto md:hidden sm:left-0 sm:w-[10%] sm:right-0'>&gt;</div>
          </div>
      </div>
    </div>
  )
}
