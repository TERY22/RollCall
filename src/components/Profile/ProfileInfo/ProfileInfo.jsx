import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div className={s.profile__img}>
				<img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt/>
			</div>
			<div className={s.descr}>
				ava + descr
			</div>
		</div>
	)
}

export default ProfileInfo;