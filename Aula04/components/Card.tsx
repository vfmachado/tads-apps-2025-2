// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

// PROPRIEDADES
// ICardProps
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onPress?: () => void;
  style?: object;
  imageStyle?: object;
  titleProps?: object;
  descriptionProps?: object;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,          // accepts { uri: '...' } or a local require(...)
  onPress,
  style,
  imageStyle,
  titleProps = {},
  descriptionProps = {},
  ...rest
}) => {
  const content = (
    // div
    <View style={[styles.container, style]} {...rest}>
      {/* props img é opcional  operardor ternario*/}
      {image ? (
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          // combinando estilo default (do componente) com um estilo que foi passado por parametro
          style={[styles.image, imageStyle]}
          resizeMode="cover"
          accessible
          accessibilityLabel={title ? `${title} image` : 'card image'}
        />
        // poderia ter outro retorno (else)
      ) : null}

      {title ? (
        <Text style={styles.title} numberOfLines={2} {...titleProps}>
          {title}
        </Text>
      ) : null}

      {description && (
        <Text style={styles.description} numberOfLines={3} {...descriptionProps}>
          {description}
        </Text>
      )}
    </View>
  );

  return onPress ? (
    <Pressable onPress={onPress} android_ripple={{ color: '#e0e0e0' }} style={({ pressed }) => [{ opacity: pressed ? 0.96 : 1 }]}>
      {content}
    </Pressable>
  ) : (
    content
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',

    // spacing
    margin: 12,
    paddingBottom: 12,

    // shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // elevation (Android)
    elevation: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginHorizontal: 12,
    color: '#111',
  },
  description: {
    fontSize: 14,
    marginTop: 6,
    marginHorizontal: 12,
    lineHeight: 20,
    color: '#444',
  },
});

export default Card;
