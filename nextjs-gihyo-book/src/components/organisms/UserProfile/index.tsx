import ShapeImage from "../../atoms/ShapeImage";
import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import Flex from "../../layout/Flex";

interface UserProfileProps {
    /**
     * バリアント（表示スタイル）
     */
    variant?: 'normal' | 'small'
    /**
     * ユーザー名
     */
    username: string
    /**
     * ユーザー画像URL
     */
    profileImageUrl: string
    /**
     * ユーザーが所有する商品数
     */
    numberOfProducts: number
    /**
     * ユーザーの説明
     */
    description?: string
}

/**
 * ユーザープロファイル
 */
const UserProfile = ({
    variant = 'normal',
    username,
    profileImageUrl,
    numberOfProducts,
    description,
}: UserProfileProps) => {
    const profileImageSize = variant === 'small' ? '100px' : '120px'

    return (
        <Flex>
            <Box minWidth={profileImageSize}>
                {/* ユーザー画像 */}
                <ShapeImage 
                    shape="circle"
                    quality="85"
                    src={profileImageUrl}
                    alt={username}
                    height={profileImageSize}
                    width={profileImageSize}  
                />
            </Box>
            <Box padding={1}>
                <Flex height="100%" flexDirection="column" justifyContent="space-between">
                    <Box>
                        {/* ユーザー名 */}
                        <Text as="p" fontWeight="bold" variant="mediumLarge" marginTop={0} marginBottom={1}>
                            {username}
                        </Text>
                        {/* 商品出品数 */}
                        <Text as="P" marginBottom={1} marginTop={0}>
                            {numberOfProducts}点出品済
                        </Text>
                        {/* ユーザー概要 */}
                        {variant === 'normal' && (
                            <Text as="p" margin={0}>
                                {description}
                            </Text>
                        )}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default UserProfile