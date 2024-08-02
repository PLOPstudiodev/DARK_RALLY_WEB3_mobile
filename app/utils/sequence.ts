import { Session } from '@0xsequence/auth'
import { ethers } from 'ethers'
import { FeeOption } from '@0xsequence/relayer'
import { FunctionFragment } from 'ethers/lib/utils'
import { SequenceIndexer } from '@0xsequence/indexer'
import { AUTHORIZATION_TOKEN, NFT_CONTRACT_ADDRESS, PROJECT_ACCESS_KEY, SIGNER } from '../constants/env'

export const mintCollectible = async (address: string, tokenID: string, amount: number) => {

  const session = await Session.singleSigner({
    signer: SIGNER,
    projectAccessKey: PROJECT_ACCESS_KEY
  })

  const signer = session.account.getSigner(80002,
    // Only required for contracts that are not sponsored on mainnets. 
    {
      selectFee: async (_txs: any, options: FeeOption[]) => {
        // Selecting native gas token
        const found = options.find(o => !o.token.contractAddress)
        return found
      }
    })

  const contractFunctions = JSON.parse(`[{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"_owner","type":"address","internalType":"address"},{"name":"_id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balanceOfBatch","inputs":[{"name":"_owners","type":"address[]","internalType":"address[]"},{"name":"_ids","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"baseURI","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"batchBurn","inputs":[{"name":"tokenIds","type":"uint256[]","internalType":"uint256[]"},{"name":"amounts","type":"uint256[]","internalType":"uint256[]"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"batchMint","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"tokenIds","type":"uint256[]","internalType":"uint256[]"},{"name":"amounts","type":"uint256[]","internalType":"uint256[]"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"burn","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"contractURI","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"getRoleMember","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getRoleMemberCount","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"tokenName","type":"string","internalType":"string"},{"name":"tokenBaseURI","type":"string","internalType":"string"},{"name":"tokenContractURI","type":"string","internalType":"string"},{"name":"royaltyReceiver","type":"address","internalType":"address"},{"name":"royaltyFeeNumerator","type":"uint96","internalType":"uint96"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"_owner","type":"address","internalType":"address"},{"name":"_operator","type":"address","internalType":"address"}],"outputs":[{"name":"isOperator","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"royaltyInfo","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"salePrice","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"safeBatchTransferFrom","inputs":[{"name":"_from","type":"address","internalType":"address"},{"name":"_to","type":"address","internalType":"address"},{"name":"_ids","type":"uint256[]","internalType":"uint256[]"},{"name":"_amounts","type":"uint256[]","internalType":"uint256[]"},{"name":"_data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"_from","type":"address","internalType":"address"},{"name":"_to","type":"address","internalType":"address"},{"name":"_id","type":"uint256","internalType":"uint256"},{"name":"_amount","type":"uint256","internalType":"uint256"},{"name":"_data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"_operator","type":"address","internalType":"address"},{"name":"_approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setBaseMetadataURI","inputs":[{"name":"tokenBaseURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setContractName","inputs":[{"name":"tokenName","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setContractURI","inputs":[{"name":"tokenContractURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setDefaultRoyalty","inputs":[{"name":"receiver","type":"address","internalType":"address"},{"name":"feeNumerator","type":"uint96","internalType":"uint96"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTokenRoyalty","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"receiver","type":"address","internalType":"address"},{"name":"feeNumerator","type":"uint96","internalType":"uint96"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"tokenSupply","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"uri","inputs":[{"name":"_id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"_owner","type":"address","indexed":true,"internalType":"address"},{"name":"_operator","type":"address","indexed":true,"internalType":"address"},{"name":"_approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"TransferBatch","inputs":[{"name":"_operator","type":"address","indexed":true,"internalType":"address"},{"name":"_from","type":"address","indexed":true,"internalType":"address"},{"name":"_to","type":"address","indexed":true,"internalType":"address"},{"name":"_ids","type":"uint256[]","indexed":false,"internalType":"uint256[]"},{"name":"_amounts","type":"uint256[]","indexed":false,"internalType":"uint256[]"}],"anonymous":false},{"type":"event","name":"TransferSingle","inputs":[{"name":"_operator","type":"address","indexed":true,"internalType":"address"},{"name":"_from","type":"address","indexed":true,"internalType":"address"},{"name":"_to","type":"address","indexed":true,"internalType":"address"},{"name":"_id","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"_amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"URI","inputs":[{"name":"_uri","type":"string","indexed":false,"internalType":"string"},{"name":"_id","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"InvalidArrayLength","inputs":[]},{"type":"error","name":"InvalidInitialization","inputs":[]}]`) as FunctionFragment[]

  const contract = new ethers.Contract(
    NFT_CONTRACT_ADDRESS,
    contractFunctions,
    signer
  )

  const accountAddress = address;
  const data = '0x';

  // Mint Collectible
  const txn = await contract.populateTransaction['mint'](
    accountAddress,
    tokenID,
    amount,
    data
  )
  const txnResponse = await signer.sendTransaction(txn)
  const txnReceipt = await txnResponse.wait()

  return txnReceipt
}

export async function getCollectibles(collectionId: number) {
  const resp = await fetch(
    `https://metadata.sequence.app/rpc/Collections/ListTokens`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTHORIZATION_TOKEN}`
      },
      body: JSON.stringify({
        collectionId,
        page: {
          after: {},
          before: {},
          column: 'string',
          more: true,
          page: 0,
          pageSize: 0,
          sort: [
            {
              column: 'string',
              order: 'DESC'
            }
          ],
          totalRecords: 0
        },
        projectId: 35811
      })
    }
  );

  const data = await resp.json();
  return data;
}

export const getTokensByAnyWallet = async (walletAddress: string) => {

  // Works in both a Webapp (browser) or Node.js:

  const client = new SequenceIndexer("https://amoy-indexer.sequence.app", PROJECT_ACCESS_KEY)

  // pass anything you would like
  const contractAddress = NFT_CONTRACT_ADDRESS;
  /* const accountAddress = "0x3b5dEfA1548284ca9Da15Bb6EbF30543941f66c6"; */
  const accountAddress = walletAddress
  const includeMetadata = true;

  // Fetch tokens and collectibles owned by any wallet
  const result = await client.getTokenBalances({
    contractAddress,
    accountAddress,
    includeMetadata
  })

  return result;
}