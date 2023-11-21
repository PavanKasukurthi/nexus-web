import './SocialLink.scss'

const SocialLink = ({ src, heading }) => {
  return (
    <section className="subItem">
      <img src={src} alt={heading} />
      <span>{heading}</span>
    </section>
  )
}
export default SocialLink
