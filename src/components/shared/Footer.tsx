import { Text } from '../ui'

const Footer = () => {
  return (
    <div className="w-full py-2 text-center">
      <Text className="opacity-60" size="xs">
        © {new Date().getFullYear()} MangaMT. All Rights Reserved.
      </Text>
    </div>
  )
}

export default Footer
