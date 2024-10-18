import React from 'react'
import classes from "./Footer.module.css"
import Logo from "../../assets/logo_only.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer>
      <section className={classes.footer}>
        <div className={classes.icons__container}>
          <div className={classes.logo_alimran}>
            <img src={Logo} alt="al-imran" target="_blank" />
          </div>

          <div className={classes.icons}>
            <a href="https://www.facebook.com/evangaditech" target="_blank">
              <FacebookOutlinedIcon />
            </a>
            <a href="https://www.instagram.com/evangaditech/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@EvangadiTech" target="_blank">
              <YouTubeIcon />
            </a>
            <a href="https://www.youtube.com/@EvangadiTech" target="_blank">
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div className={classes.links__container}>
          <h2>ጠቃሚ ሊንኮች</h2>
          <ul className={classes.list}>
            <li>
              <a href="https://www.evangadi.com/legal/terms/" target="_blank">
                ዋና ማዉጫ
              </a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
                መረጃ
              </a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
                አገልግሎቶች
              </a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
                አድራሻ
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.contact__container}>
          <h2>አድራሻ</h2>
          <p>al-imram@gmail.com</p>
          <p>+1-202-386-2702</p>
          <div className={classes.location}>
            <LocationOnIcon/>
            <p>Ethiopia, Addis Ababa, CMC</p>
          </div>
          
        </div>
      </section>
    </footer>
  );
}

export default Footer