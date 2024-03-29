import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAppContext } from './context/AppContext'
import { IconHeart } from './snippets/IconHeart'

export const Footer = () => {

    const { lang, homeData } = useAppContext();
    const socialMediaFromWP = homeData.nodes[0];
    const socialMedia = [
        {facebook: socialMediaFromWP.facebook}, 
        {instagram: socialMediaFromWP.instagram}, 
        {twitter: socialMediaFromWP.twitter}, 
        {tAdvisor: socialMediaFromWP.tAdvisor}
    ]

    return (
        <div className='h-full pt-10 flex flex-col space-y-5 items-center text-white '>
            <h2 className='text-xl'>
                { lang === 'esp' && 'SÍGUENOS' }
                { lang === 'eng' && 'FOLLOW US' }
            </h2>
            <div className='flex space-x-5 pb-10'>
                {
                    socialMedia.map(elem => ( 
                        Object.values(elem)[0] !== '' && 
                        <Link 
                            key={Object.keys(elem)[0]} 
                            href={Object.values(elem)[0]} 
                            target="_blank"
                        >
                            {/* THIS HAS TO BE OPTIMIZED */}
                            { 
                                Object.keys(elem)[0] === 'facebook' && 
                                <svg className='social-media-icons' xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="45px" height="45px" fill="#ffffff"><g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM32,16h-3.29c-1.938,0 -2.71,0.455 -2.71,1.806v3.194h6l-1,5h-5v13h-6v-13h-3v-5h3v-2.774c0,-4.225 1.686,-7.226 6.581,-7.226c2.622,0 5.419,1 5.419,1z"></path></g></g></svg>
                            }
                            { 
                                Object.keys(elem)[0] === 'instagram' && 
                                <svg className='social-media-icons' width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#ffffff" fillRule="nonzero"></path> </g> </g></svg>
                            }
                            { 
                                Object.keys(elem)[0] === 'tAdvisor' && 
                                <svg className='social-media-icons' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 97.75 97.75"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M67.211,46.07c-3.291,0-5.971,2.648-5.982,5.917c-0.012,3.252,2.681,5.959,5.939,5.967 c3.266,0.01,5.949-2.674,5.947-5.943C73.113,48.732,70.465,46.07,67.211,46.07z M67.211,55.02c-1.686,0-3.043-1.332-3.039-2.983 c0.002-1.716,1.318-3.039,3.02-3.041c1.666-0.002,3.031,1.362,3.017,3.021C70.189,53.672,68.848,55.02,67.211,55.02z"></path> <path d="M30.512,37.514c-7.9-0.07-14.787,6.523-14.65,14.921c0.129,7.832,6.584,14.472,14.814,14.4 c8.047-0.068,14.516-6.641,14.531-14.6C45.219,44.063,38.672,37.514,30.512,37.514z M30.748,61.1 c-5.293,0.242-9.564-3.977-9.555-9.1c0.01-5.191,4.287-9.162,9.125-9.074c5.023-0.006,9.1,4.049,9.086,9.07 C39.391,57.078,35.385,60.889,30.748,61.1z"></path> <path d="M48.875,0C21.883,0,0,21.883,0,48.875S21.883,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.867,0,48.875,0z M76.971,67.852c-2.984,1.896-6.283,2.795-9.807,2.814c-1.48,0.01-2.955-0.189-4.4-0.564c-3.522-0.914-6.545-2.672-9.035-5.33 c-0.33-0.35-0.639-0.713-0.987-1.108c-1.316,1.961-2.611,3.892-3.939,5.871c-1.32-1.974-2.6-3.886-3.873-5.787 c-0.088,0.045-0.113,0.051-0.131,0.065c-0.029,0.025-0.055,0.056-0.076,0.082c-3.012,3.556-6.801,5.734-11.414,6.465 c-2.568,0.406-5.109,0.261-7.604-0.428c-3.533-0.971-6.537-2.834-8.963-5.586c-2.371-2.688-3.846-5.812-4.398-9.363 c-0.633-3.312,0.137-6.508,0.33-7.282c0.559-2.252,1.531-4.322,2.867-6.225c0.094-0.135,0.127-0.375,0.082-0.535 c-0.545-1.998-1.482-3.816-2.582-5.557c-0.279-0.441-0.613-0.85-0.922-1.275c0-0.049,0-0.098,0-0.148 c0.061,0.008,0.123,0.02,0.184,0.02c3.697,0.002,7.396,0.002,11.094-0.004c0.162,0,0.34-0.066,0.479-0.154 c2.598-1.668,5.367-2.988,8.275-4.016c2.098-0.74,4.238-1.318,6.424-1.742c2.115-0.408,4.24-0.697,6.389-0.838 c5.238-0.404,9.426,0.15,12.211,0.539c2.053,0.289,4.064,0.807,6.051,1.416c3.469,1.068,6.74,2.553,9.818,4.477 c0.213,0.133,0.5,0.217,0.752,0.217c3.613,0.016,7.227,0.01,10.84,0.014c0.291,0,0.582,0.031,0.871,0.047 c0,0.07,0.01,0.1-0.002,0.117c-0.168,0.258-0.34,0.516-0.508,0.775c-1.225,1.879-2.273,3.848-2.893,6.021 c-0.066,0.232-0.082,0.428,0.076,0.658c3.219,4.621,4.243,9.693,2.899,15.162C83.898,61.465,81.15,65.203,76.971,67.852z"></path> <path d="M30.236,46.07c-3.209,0.006-5.898,2.715-5.891,5.936c0.008,3.26,2.695,5.941,5.963,5.949 c3.248,0.008,5.939-2.697,5.932-5.965C36.23,48.691,33.564,46.064,30.236,46.07z M30.311,55.051 c-1.723,0.002-3.051-1.328-3.051-3.061c0-1.701,1.326-3.021,3.043-3.023c1.689-0.002,3.049,1.348,3.057,3.035 C33.365,53.674,31.994,55.045,30.311,55.051z"></path> <path d="M66.902,37.57c-8.019,0.164-14.295,6.627-14.367,14.622c0,8.121,6.59,14.756,14.682,14.725 c8.123-0.029,14.682-6.477,14.676-14.688C81.889,43.766,75.023,37.404,66.902,37.57z M67.562,61.102 c-5.271,0.203-9.489-4-9.487-9.094c0.002-5.154,4.252-9.17,9.112-9.082c5.027-0.01,9.099,4.039,9.099,9.061 C76.285,57.027,72.283,60.922,67.562,61.102z"></path> <path d="M54.732,38.639c3.248-2.98,7.117-4.543,11.506-4.875c-5.209-2.314-10.701-3.299-16.355-3.408 c-6.424-0.125-12.674,0.822-18.643,3.326c4.463,0.271,8.383,1.828,11.695,4.838c3.305,3.008,5.242,6.756,5.945,11.166 C49.604,45.328,51.488,41.613,54.732,38.639z"></path> </g> </g> </g></svg>
                            }
                            { 
                                Object.keys(elem)[0] === 'twitter' && 
                                <svg className='social-media-icons' height="45px" width="45px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M260.926,217.391 c0.084,0.004,0.164,0.021,0.25,0.025c-0.875-3.752-1.328-7.664-1.328-11.682c0-28.307,22.951-51.258,51.262-51.258 c14.742,0,28.063,6.225,37.414,16.188c9.6-1.89,18.684-5.174,27.129-9.523c1.781-0.864,3.566-1.723,5.32-2.674 c-3.039,9.334-8.744,17.412-16.141,23.532c-2.004,1.576-4.062,3.098-6.326,4.344c0.154-0.018,0.304-0.052,0.457-0.071 c-0.15,0.093-0.275,0.22-0.428,0.312c8.402-1.005,16.459-3.051,24.111-5.942c1.715-0.592,3.428-1.191,5.127-1.852 c-6.842,10.159-15.453,19.095-25.375,26.259c0.098,2.197,0.148,4.406,0.148,6.631c0,67.736-51.558,145.842-145.844,145.842 c-28.947,0-55.891-8.484-78.576-23.028c4.01,0.473,8.092,0.715,12.229,0.715c19.136,0,37.014-5.269,52.383-14.34 c3.871-2.23,7.658-4.639,11.273-7.365c-0.098-0.002-0.187-0.026-0.285-0.028c0.094-0.073,0.196-0.136,0.289-0.209 c-19.422-0.358-36.184-11.539-44.574-27.747c-1.25-2.489-2.32-5.096-3.164-7.831c3.086,0.58,6.246,0.898,9.5,0.898 c3.391,0,6.666-0.436,9.871-1.063c1.197-0.168,2.406-0.308,3.586-0.502c-0.156-0.032-0.293-0.1-0.449-0.133 c0.162-0.042,0.336-0.056,0.496-0.1c-23.449-4.709-41.119-25.428-41.119-50.262c0-0.196,0.002-0.387,0.004-0.58l0.024-0.055 c5.521,3.064,11.693,5.092,18.23,5.94c1.609,0.269,3.221,0.516,4.832,0.657c-0.11-0.074-0.205-0.164-0.314-0.238 c0.152,0.006,0.297,0.036,0.447,0.041c-13.754-9.191-22.803-24.883-22.803-42.666c0-8.142,1.988-15.787,5.367-22.623 c0.539-1.028,1.018-2.078,1.637-3.074c22.711,27.822,55.516,46.971,92.801,52.15c4.16,0.605,8.332,1.144,12.553,1.388 C260.934,217.443,260.932,217.416,260.926,217.391z"></path> </g> </g></svg>
                            }
                        </Link>
                    ))
                }
            </div>

            <hr className='w-[90%] border-gray-500' />

            <div className='flex flex-col items-center justify-center pb-4 w-full'>
                <span>Kiltro Restobar © 2023.</span>
                <span className='flex'>Desarrollado con &nbsp; <IconHeart /> &nbsp; por &nbsp; <a className='text-primary-main' rel="noreferrer" href="https://www.eandresvera.com/" target='_blank'>eandresvera</a></span>
            </div>
        </div>
    )
}
