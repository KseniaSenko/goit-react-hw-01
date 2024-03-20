import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {

  return (
    <div className={css.profile}>
      <div className={css.profile_info}>
        <img className={css.profile_img} src={image} alt="User avatar" />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_details}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={css.profile_details_list} key={key}>
            <span className={css.profile_list_item} >{key}</span>
            <span className={css.profile_list_value}>{value}</span>
            </li>   
          ))}
      </ul>
    </div>
  )
}

export default Profile;

