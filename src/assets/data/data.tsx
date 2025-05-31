import proj1 from "../images/proj1.webp"
import proj2 from "../images/proj2.webp"

type skillsInfoTYPE={
    title: string,
    img:string,
    description: string,
}

type worksInfoType={
    img: string,
    title: string,
    description: string,
    type?:string,
    id?:number,
}

type tabItemsType = {
    title: string,
    status:"all" | "landing" | "react" | "spa"
}

type arrayIncludeStringType=string[]

export const skillsInfo:skillsInfoTYPE[] = [
    {
        title:"HTML5",
        img:"codeSvg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }, {
        title:"CSS3",
        img:"css",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }, {
        title:"REACT",
        img:"react",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }, {
        title:"TYPESCRIPT",
        img:"typescript",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }, {
        title:"STYLED COMPONENTS",
        img:"styled",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }, {
        title:"WEB DESIGN",
        img:"figma",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]

export const worksInfo:worksInfoType[]=[
    {
        img:proj1,
        title:'Social Network',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:"spa",
        id:1,
    }, {
        img:proj2,
        title:'Timer',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'react',
        id:2,
    }, {
        img:proj2,
        title:'Timer',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'react',
        id:3,
    },{
        img:proj2,
        title:'Timer',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'react',
        id:4,
    }
]

export const menuHeader:Array<{title:string,href:string}>=[
    {
        title:"Home",
        href:"home"
    },
    {
        title:"Skills",
        href:"skills"
    },
    {
        title:"Works",
        href:"works"
    },
    {
        title:"Testimony",
        href:"testimony"
    },
    {
        title:"Contact",
        href: "contact"
    }
]

export const socialList:arrayIncludeStringType=["instagram","telegram","vk","linkedin"]

export const tabsItems:tabItemsType[]=[
    {
        title:"ALL",
        status:"all"
    },
    {
        title:"landing page",
        status:"landing"
    },
    {
        title:"react",
        status:"react"
    },
    {
        title:"spa",
        status:"spa"
    }
]