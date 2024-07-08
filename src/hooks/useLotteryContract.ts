import { Lottery } from '../contracts/lottery'
import { useTonClient } from './useTonClient'
import { useTonConnect } from './useTonConnect'
import { useAsyncInitialize } from './useAsyncInitialize'
import { Address } from '@ton/core'

const contractAddress = 'EQCUVS0S3jhxv5cc_l4kUv_nt2JOL4GvwAMGOhOWYWiTAk5p'

export function useLotteryContract() {
    const client = useTonClient()
    const { sender } = useTonConnect()

    const lotteryContract = useAsyncInitialize(async () => {
        if (!client) return

        return client.open(
            Lottery.createFromAddress(Address.parse(contractAddress))
        )
    }, [client])

    return {
        address: lotteryContract?.address.toString(),
        sendBet: () => {
            lotteryContract?.sendBet(sender)
        },
    }
}
