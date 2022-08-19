import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import styled from 'styled-components/native'
import MySVG from "../../common/svg";
import { View } from "react-native";
import Typography from "../../common/typography/Typography";
import ModalTitle from "../../common/modal/ModalTitle";
import Divider from "../../common/divider";
import RadioCard from "../../common/base/RadioCard";
import IconWrapper from "../../common/base/IconWrapper";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import { useEffect, useState } from "react";

export default function AssetQRCodeModal({ show, onClose, onOk }) {

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                <TitleBar>
                    <MySVG.Bitcoin width={40} height={40} />
                    <View style={{ marginLeft: 15 }}>
                        <ModalTitle title="BTC" />
                        <Typography variant="secondary">Bitcoin</Typography>
                    </View>
                </TitleBar>
            </ModalHeader>

            <Typography weight="Light" size={12} variant="secondary">Total</Typography>
            <Typography weight="Medium">0.244</Typography>

            <Divider />

            <Typography weight="Medium">QR Code</Typography>
            <Typography weight="Light" size={12} variant="secondary">Please scan this QR Code to add BTC</Typography>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <QRCodeWrapper>
                    <Typography>QR Code</Typography>
                </QRCodeWrapper>
            </View>

            <View style={{ padding: 10 }}>
                <Typography variant="secondary">Send only Binance-Peg-BTC (BEP20) to this address. Sending any other coins may result in Permanent Loss.</Typography>
            </View>
            
            <ModalDefaultActions
                onOk={onOk}
                onCancel={onClose}
                OkButtonText="Copy"
            />
        </BaseModal>
    )
}

const TitleBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

const QRCodeWrapper = styled.View`
    border: 1px solid;
    border-color: ${props => props.dark ? '#FFF' : '#F0F0FA'};
    width: 295px;
    height: 277px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 12px;
`;