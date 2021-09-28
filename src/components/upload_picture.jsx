import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const UploadPicture = (props) => {
	const [image, setImage] = useState('');
	const uploadImage = () => {
		const data = new FormData()
		const setUrl = (data) => {
			props.setImageUrl(data);
		}
		data.append("file", image)
		data.append("upload_preset", "reactnutribook")
		data.append("cloud_name", "mealzzap")
		fetch("  https://api.cloudinary.com/v1_1/mealzzap/image/upload", {
			method: "post",
			body: data
		})
			.then(resp => resp.json())
			.then(data => {
			setUrl(data.url)
			})
			.catch(err => console.log(err))
	}
	
		return (
			<div>
				<div>
					<input
						className="form-control-file"
						accept="image/*"
						type="file"
						name="recipeUrlImage"
						onChange={(e) => setImage(e.target.files[0])}>
					</input>
					<Button onClick={uploadImage}>Upload</Button>
				</div>
				<div>
					<img src={props.recipeUrlImage} alt="uploaded illustration of the recipe" />
				</div>
			</div>
		);
};
export default UploadPicture;