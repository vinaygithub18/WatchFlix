import React from 'react'
import DashboardLayout from './DashboardLayout'
import { Text, position } from '@chakra-ui/react'

const images = [
    {
      desc: "Action & Adventure",  
      link: "https://s3-alpha-sig.figma.com/img/995e/56d3/2019e67a8414340621db69110d5efe73?Expires=1691366400&Signature=Bg6~vHphTaMKfFUNbNGgqwWgYfD~tW~rD2tsgaz2ELT2NB-jgO4gagoAn42g~8eJKhkNtKHcMeLjhZ3xlZAh0io2JhswkF0Dl7E8ufCQ-mqGNu5pwdW-CVSbvuuPCFxYkpjslH8Bc2pmB06n2brdv40VqYmWAUQ-kaReg1mmNVaaBsj1c8ldTaE4TwniylUjajxl7DX7~3pRNaWJBDkKD8RlS3H9I41CTL0rxMrxAAqg6RP5eHxw0X6HuTojf-8SbtCRZoLFKY4iZ8b--1zYFl24ZAvOn6DlfEnRloUndhK1vHh8-ECK~6uAcDDAefbvd7oR5pUzjtzrvBvxLhwxRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",  
    },
  
    {
      desc: "Anime",
      link: "https://s3-alpha-sig.figma.com/img/4feb/b41a/fb4fdb4de876075f30ab0e8fe41be8da?Expires=1691366400&Signature=KwK0yd5~4h9CzJ6syj0fP6Saw5Cl2oWHjGiAUge0V6lc5U3-ECnuEThvK5xgzYvEWDz2dYoGhdynJTVcOrF3D6VZwnHcFfSZ6cc62pQ3Vk3ceuXvHmpndhEJq~amCqe9vuqDRYTpwmyRv7B8T-OfNWd2vLd~YIy7lWlrcpw73t0B1jOFdVaRjb~dZyRvjEe-JDY-0e1z0SE3ch3p7E53ktIiUiij~-ltyrG91LxvegmoN71cPNgS9iItkW6TQdxLa20pcSh1eaVGqMMYvHZbKfOVZe3xO1~PPLEfpDA1vGJs7PzeZvzlmU6DHefwQ69j3oj4gxVLhs990zSkH8qiYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },

    { 
      desc: "Comedy", 
      link: "https://s3-alpha-sig.figma.com/img/6998/919a/7e6e2d9f75f9a286b2aefa1bcbb435a1?Expires=1691366400&Signature=QZgD-f48pMxOvooARdS0N8BTV4XwE9~9sePbPbgDIuZDb8p0NhzpV4uwPmxDxL26AUjor9~Q9cx~yy~T5s4vb4KQEsl-rCWQTEnT29pvKgH9i7zz2k3GMm0tAo3hGp1O5Wu6pYyq5f~5uyBJHNPZoL3bKAkWbRSm-khgIBAWShGSjlVoRMh1NnUNnkVeCv2Xo-Z5~338wZ7JU2dtXuvQJPJieeXQ3UXuvDTmmETkJkDyN50zkXTGZP9i6Uzec3A9qLVV7Jfbt0jwzbxhwnUChL4h5bdElFK-DT16e1QLHlZVIp~-8lBJj1J14uUNm7U9IBihSertAj9CKU6HMgk6zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Documentary",
      link: "https://s3-alpha-sig.figma.com/img/4ee0/9c5d/d8b735e60f5442b2f6ef8e9f1f468407?Expires=1691366400&Signature=GxahGlZp3azg1whrgc9DYppo6BGBgeu0tktH7LIaJjhx0Bld9WSSuRV1ZQmBqbGUDzkGPfOJcToZqsBmkJeK4YSPN9BL3jkKmuprSlExbcu-Z50JR5rLEXRfqJUGorUOjJjfggdRPFED4ZOYEnHPDM7-mty8zUudL-mLf5miZ3RmebqynPLbw1D9xHf8T~31aLpsLWqI8xM5iNMRPdnQwpOdld8dCsUt7xLFiFSLWwFVItqY6o5SALrAo2xjsRNwzUtWMBSX4rKlmnmru5uDqLVXHedZCpq4bJ~pdow9RsGU3W3-T94CojlOHLS~VHJapj16v9eZq28g-qhozvMTNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Drama",
      link: "https://s3-alpha-sig.figma.com/img/491f/4a0b/890697923f95c7603ca545cdc1bb7648?Expires=1691366400&Signature=p~As-QJnC55evi0BkgGYOfVKrCfghDbc3PUlftO4zjYKpC3~Y9fjKQhQ6k7YymKyLvQyGJbAmv91CDSLh1laCRmlgfGEwVCmr6oog0C6dZphRH9pzx7N7T9vkYCZuoLzgZlGvi9FfDdobfsRl8gE0IWJLXsUii5-JTB86V8VZP~5ubzp4nhPebsNeS-54evUU53uxz4oMbZr3ACpZ8QGZjX3j-28lJ~FJ1DYQTohEdHI75yvQAGRtecxrK2N2uhkYNIOF5i4EW~D5f-vJh7C2r1hIVej7nm2~FTjZwfb1P~gWn9Dh3t6-OEhOB3Yz9TcUTuT8NC5O3Fq9vonjWK1HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Fantasy",
      link: "https://s3-alpha-sig.figma.com/img/9ec5/a02a/5760fe51c3fdb60938b20f6019671ad8?Expires=1691366400&Signature=NToWJydlHQmfJ3BzxUzZ4pmNWCFoRsGbwFfua78uoeGq0cxP1d9j7yZSmKceGVyAFUD3GqQP7TWHJQQBX7vbtQB2bd96uHSOswg4X73SSt63ylEt3FRTKpjljeG2pzI5ycbas0Z3Vpvvzc~Ffze0r-Q6i-6sBbuDzoH1XFxzP9FzCINHS8ONC15cOL0XUDGj9ZrP9Yd9kWGT5E28GFS8tR7va45qqUpKE0gMaTDrC8DCm14DzJt8OHXYO8-HwduuRb4XaqAyxwppV8gg-qXBVysIycNKdfT-LKUs06lplDbkApMIkOCK~lEgfYKO-Gka39iVGRgHHZYjHDUC8wRCcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Horror",
      link: "https://s3-alpha-sig.figma.com/img/c423/b4bb/77dc1c7f200466a0829562172e3fe2e1?Expires=1691366400&Signature=EbbKi~yjm-IpVJ-4f4sr118D3SJkgkX4r1iltpDjXFKLqbgj8rKlKly1bydGHUYa7xd1WlmQS~rWeKG51UZgYdzNCi8m9QiMrCSUABZC5aWfQEMmIz~if3i4tfC7Gf1~3fwat9heBFDQQ8acoSTBEa4lYVqMXao2iYZXIHZ7kAmub1VpGw2Q8gkDlAS3Tuy2NaOsmdF3xI7LTGQ1U~XJcafyqRTg3RyUXJeJaKP~37BGUwhV016qLrC1o61kS0BztyuTE~uuL9PMu6TUred61guqgzoUw82~0n-PJz5rRVnRb-FpL75UJboDzOgVrKOcdxwwNPdVRY3~eWPmN3zAhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Romance",
      link: "https://s3-alpha-sig.figma.com/img/9f1c/8bae/fbaa6ab974392b38676133e92e76bbdf?Expires=1691366400&Signature=qN6LYluJ-dSluPOjkzr4Ala5zG33yfPNQeF7qLVfWIGW4HVavBHMFA1NcDdAjEtGquFQlVELpkjv53nOnrBo~djQjdzMbcG5IrE6B0qeffqNez-PqQFlCfDMs5wIeHoXEwNohewzc9dVe1qghR~jMOhVBfFhB5RiuhBfY91NCe3o1ySV5Rf38UZYCeeCvjAFsLe~KULuxeVSHDcBfYCfD2Q-HEJzQflaCmw2KeFXHkCp3DCf67KVc4Pvb7lKVazNN2Wbb6V3BIV~cjbktDE7BjxmBtL6pL4vfhz72v7rzXCuYFmlodKjIceesx91iujYhcYI~nIelvWbjfPSegmV-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Mystery & Thrillers",
      link: "https://s3-alpha-sig.figma.com/img/576d/4166/bbbe3282a1cb8f27b5c526bced34edb4?Expires=1691366400&Signature=dwZKUtWhS9vUCT6e9AAUnCnEEK2eVsrq2MN~3pY4f9gGdPL~~sPPXMfBeWdUNSD4qHzfR7TtUMABuh8pYygWJBwrZsrx~LtIBCAmMpGp4vpe71Y8eIzRfHI3LLf0TYI8AVIUJHD-XM2Kxb-HsoPJrtRoKOgHOAHHd~FgzTzx2OrrzsRhHtc7hyHoibFoc95bqN7akv68Em8slTvFYBzeXhTjTU1G5uLpHlQkFJobLeZLaN122B5doZlXRgwgv8XDanIPB7CCzsDIZ1q9ZXgDB6WVps5pHE7rN~ESPI1MMkizL9quY-Y4Nbi0eh5w-tYKyXE78kPvBGFS-s~UfTnpqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: 'Sci-Fi',
      link: "https://s3-alpha-sig.figma.com/img/4afa/e567/2a2a94601c5215ea6aa7d17020ebd53d?Expires=1691366400&Signature=C7qLehs6YbwOVmfHDkxOX0Io7o-NMAL2ElTiXDbxOjNjulDhn5veU8Kyogrykt-Ky-rHi4dmetDMxK8AvVDYEK4EHLOgwvPP0JNdrdRdVSebXQBsadRHJcx~gAGHyVA1Vh7aKXmyPPd4KeFnArEiDwk5E0Gj9Xbt6cNGvL719kJCz9fFdqsXLVmohz3NjBAU-HVpcMfdXC2Rja7uFi1QjAHvaH2y4URRrSAdzm-IqKhZkW-Noo1b-esfJVK0TpOJoRZJ8Kw447kFJXdgZx7v1fXHtw-70kWdYZQIOH44bi2JQhlyNcTMWRD8QtSZlsbON19nYt9jQK0FpBeHRphcZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Kids",
      link: "https://s3-alpha-sig.figma.com/img/ea8e/0cc8/54556d2f53f2f21969ca2d5f978f98f8?Expires=1691366400&Signature=A96v926g5KJ038BuWulXo6saJ9yT8u2JQrX6ZAaMEo9QoIw~RG2WWZD5pLWIn9h4mtuY~qzJLyeWTdvQrAzq5xz7dp2h5ePfmx9rI7yR5wXdrGX7rZA32zIarxLzTXTulWy3Sl70wKC9qSpg4QQXU37t7KrQlTUmULDcKi3VeQ2NDtC6phU9IFeH26kXgtrzU-nbNFFm-LXWwZVAywPofhG1RyzfpkBpVPyq3zoMte3-JjW7qhbcljzpUbeaSsMisCMrewPAmsC0XyBuUvir0ABPwgD8YVddZvBfvLtYoZ-Sr2Hqo1YZMhW-ysEhOqj9~4qQ8zeRQAZQTJgtJEX9Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
    {
      desc: "Sports",
      link: "https://s3-alpha-sig.figma.com/img/6664/db8e/51440a69a191db938d6aeb669de21d3c?Expires=1691366400&Signature=b1zaYP7eZyp~m3uoDRf9X8Xd-pALmljQm2sRvOGyqmKyhQiwrO3jc7CFbnPKBvkKXdQoHEI2YvPsDrTA9mK9geNARO2IS54~pJfd3sLQ4hPXFal6XVYImAnageadDIDWUgqnzl9sHyF3dP4c5wJj~SPdiGcRvPFMwmRONuvobI4XWVlk2LSJUGQVAOUF05yZSH6BcE6TVYrFk1DiBl0L384nlkY5mb54YxDedOpBIWHwX69ngXNh6aWccuf1iZabnFwLe~fVbgmnERvLUU9iQ8We8CIBt1U7VS46g0pTY5k9XXTyb6jPDF4eiuaZIDnjTo0Fcj0n3WYcnstfSBi6WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  
  ];
function Categories() {
  return (
    <DashboardLayout>
      <div className='categories' style={{position:"relative"}}>
        {
            images.map((category,index)=>{
                return (
                    <div className='category-item' key={index}>
                        <img src={category.link} style={{
                            width: "250px",
                            height: "330px",
                            flexShrink: "0",
                            objectFit:"contain",
                            borderRadius: "12px",
                            opacity: "0.699999988079071",
                            background: "#131313",
                            backdropFilter: "blur(95px)",
                        }}></img>
                        <Text style={{
                            position: "absolute",
                            color: "#FFF",
                            // textAlign: "center",
                            fontFamily: "Overpass",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "0.96px",
                        }}>{category.desc}</Text>
                    </div>
                )
            })
        }
      </div>
    </DashboardLayout>
  )
}

export default Categories
