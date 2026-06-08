interface BannerProps{
    image:string;
    title:string
}
export default function Banner ({image,title}:BannerProps){
    return(
        <div className="home-banner">
            <img src={image} alt="home banner image" />
            <div className="banner__overlay"></div>
            <h1>{title}</h1>
        </div>
    )
}