import Utils from "../utils/utils";

export const COLORS = {
    backgroundColor: '#090D2B',
    primaryBlackColor: '#090C7D',
    secondaryBlackColor: '#2C4DDE',
    primaryLightColor: '#fff',
    secondaryLightColor: '#bfbfbf',
    mainColor: '#63e6be',
    backgroundBtn: '#74c0fc',
    bgInput: '#183153',
}

interface IFontSize {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
}

export const FONT_SIZE: IFontSize = {
    small: Utils.normalize(12),
    medium: Utils.normalize(16),
    large: Utils.normalize(20),
    extraLarge: Utils.normalize(30),
}
