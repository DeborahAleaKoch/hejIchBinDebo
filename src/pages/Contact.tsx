import { useRef } from "react";
import { Headline } from "../components/Headline";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	// const form = formRef.current?.value || "";

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) {
			return;
		}

		emailjs
			.sendForm("service_57qi8tg", "template_7mjap5f", form.current, {
				publicKey: "8X30DER1x2VLc251l",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					alert("Nachricht wurde erfolgreich verschickt. ✉️");
					form.current?.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					alert(
						"Huppali, hier ist ein Fehler aufgetreten. Versuch es noch mal."
					);
				}
			);
	};

	return (
		<>
			<Headline title='Kontakt' />

			<div className='text-center py-5 font-light text-xl'>
				<p>
					Hast du Fragen oder Anmerkungen, lass es mich wissen und schreib mir.
				</p>

				<form
					ref={form}
					onSubmit={sendEmail}
					className=' flex flex-col gap-5 items-center py-5 '
				>
					<input
						type='text'
						name='user_name'
						id=''
						className='input input-warning '
						placeholder='name'
						required
					/>

					<input
						type='email'
						name='user_email'
						id=''
						className='input input-warning'
						placeholder='email'
						required
					/>
					<input
						type='subject'
						name='subject'
						id=''
						className='input input-warning'
						placeholder='Betreff'
						required
					/>

					<textarea
						name='message'
						id=''
						className='input input-warning field-sizing-content pt-2 h-30 text-wrap'
						placeholder='Gib hier eine Nachricht ein.'
						required
						rows={10}
					/>
					<input
						type='submit'
						value='Send'
						className='btn btn-warning font-semibold text-white hover:bg-(--color-secondary) hover:text-(--color-primary)'
					/>
				</form>
			</div>
		</>
	);
};
