/*
 * Isomorphic SmartClient
 * Version SC_SNAPSHOT-2010-10-22 (2010-10-22)
 * Copyright(c) 1998 and beyond Isomorphic Software, Inc. All rights reserved.
 * "SmartClient" is a trademark of Isomorphic Software, Inc.
 *
 * licensing@smartclient.com
 *
 * http://smartclient.com/license
 */

isc.SchemaSet.create({
    serviceNamespace:"urn:ebay:apis:eBLBaseComponents",
    schemaNamespace:"urn:ebay:apis:eBLBaseComponents",
    qualifyAll:true,
    schema:[
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"CustomSecurityHeaderType",
            fields:{},
            ID:"RequesterCredentials"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddDisputeRequestType",
            fields:{},
            ID:"AddDisputeRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DisputeExplanation:{name:"DisputeExplanation", type:"DisputeExplanationCodeType", xmlRequired:false},
                DisputeReason:{name:"DisputeReason", type:"DisputeReasonCodeType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false}
            },
            ID:"AddDisputeRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddDisputeResponseType",
            fields:{},
            ID:"AddDisputeResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                DisputeID:{name:"DisputeID", type:"DisputeIDType", xmlRequired:false}
            },
            ID:"AddDisputeResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddDisputeResponseRequestType",
            fields:{},
            ID:"AddDisputeResponseRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DisputeID:{name:"DisputeID", type:"DisputeIDType", xmlRequired:false},
                MessageText:{name:"MessageText", type:"string", xmlRequired:false},
                DisputeActivity:{name:"DisputeActivity", type:"DisputeActivityCodeType", xmlRequired:false},
                ShippingCarrierUsed:{name:"ShippingCarrierUsed", type:"string", xmlRequired:false},
                ShipmentTrackNumber:{name:"ShipmentTrackNumber", type:"string", xmlRequired:false},
                ShippingTime:{name:"ShippingTime", type:"dateTime", xmlRequired:false}
            },
            ID:"AddDisputeResponseRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddDisputeResponseResponseType",
            fields:{},
            ID:"AddDisputeResponseResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"AddDisputeResponseResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddItemRequestType",
            fields:{},
            ID:"AddItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false}
            },
            ID:"AddItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddItemResponseType",
            fields:{},
            ID:"AddItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"AddItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddLiveAuctionItemRequestType",
            fields:{},
            ID:"AddLiveAuctionItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false}
            },
            ID:"AddLiveAuctionItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddLiveAuctionItemResponseType",
            fields:{},
            ID:"AddLiveAuctionItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"AddLiveAuctionItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessageAAQToPartnerRequestType",
            fields:{},
            ID:"AddMemberMessageAAQToPartnerRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                MemberMessage:{name:"MemberMessage", type:"MemberMessageType", xmlRequired:false}
            },
            ID:"AddMemberMessageAAQToPartnerRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessageAAQToPartnerResponseType",
            fields:{},
            ID:"AddMemberMessageAAQToPartnerResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"AddMemberMessageAAQToPartnerResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessageRTQRequestType",
            fields:{},
            ID:"AddMemberMessageRTQRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                MemberMessage:{name:"MemberMessage", type:"MemberMessageType", xmlRequired:false}
            },
            ID:"AddMemberMessageRTQRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessageRTQResponseType",
            fields:{},
            ID:"AddMemberMessageRTQResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"AddMemberMessageRTQResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessagesAAQToBidderRequestType",
            fields:{},
            ID:"AddMemberMessagesAAQToBidderRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AddMemberMessagesAAQToBidderRequestContainer:{name:"AddMemberMessagesAAQToBidderRequestContainer", 
                                                              type:"AddMemberMessagesAAQToBidderRequestContainerType",xmlRequired:false}
            },
            ID:"AddMemberMessagesAAQToBidderRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddMemberMessagesAAQToBidderResponseType",
            fields:{},
            ID:"AddMemberMessagesAAQToBidderResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AddMemberMessagesAAQToBidderResponseContainer:{name:"AddMemberMessagesAAQToBidderResponseContainer", 
                                                               type:"AddMemberMessagesAAQToBidderResponseContainerType",xmlRequired:false}
            },
            ID:"AddMemberMessagesAAQToBidderResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddOrderRequestType",
            fields:{},
            ID:"AddOrderRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Order:{name:"Order", type:"OrderType", xmlRequired:false}
            },
            ID:"AddOrderRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddOrderResponseType",
            fields:{},
            ID:"AddOrderResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                OrderID:{name:"OrderID", type:"OrderIDType", xmlRequired:false},
                CreatedTime:{name:"CreatedTime", type:"dateTime", xmlRequired:false}
            },
            ID:"AddOrderResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddSecondChanceItemRequestType",
            fields:{},
            ID:"AddSecondChanceItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                RecipientBidderUserID:{name:"RecipientBidderUserID", type:"UserIDType", xmlRequired:false},
                BuyItNowPrice:{name:"BuyItNowPrice", type:"AmountType", xmlRequired:false},
                Duration:{name:"Duration", type:"SecondChanceOfferDurationCodeType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                SellerMessage:{name:"SellerMessage", type:"string", xmlRequired:false}
            },
            ID:"AddSecondChanceItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddSecondChanceItemResponseType",
            fields:{},
            ID:"AddSecondChanceItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"AddSecondChanceItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddToItemDescriptionRequestType",
            fields:{},
            ID:"AddToItemDescriptionRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"AddToItemDescriptionRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddToItemDescriptionResponseType",
            fields:{},
            ID:"AddToItemDescriptionResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"AddToItemDescriptionResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddToWatchListRequestType",
            fields:{},
            ID:"AddToWatchListRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"AddToWatchListRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddToWatchListResponseType",
            fields:{},
            ID:"AddToWatchListResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                WatchListCount:{name:"WatchListCount", type:"int", xmlRequired:false},
                WatchListMaximum:{name:"WatchListMaximum", type:"int", xmlRequired:false}
            },
            ID:"AddToWatchListResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddTransactionConfirmationItemRequestType",
            fields:{},
            ID:"AddTransactionConfirmationItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                RecipientUserID:{name:"RecipientUserID", type:"UserIDType", xmlRequired:true},
                VerifyEligibilityOnly:{name:"VerifyEligibilityOnly", type:"string", xmlRequired:true},
                RecipientPostalCode:{name:"RecipientPostalCode", type:"string", xmlRequired:true},
                RecipientRelationType:{name:"RecipientRelationType", type:"RecipientRelationCodeType", 
                                       xmlRequired:true},
                NegotiatedPrice:{name:"NegotiatedPrice", type:"AmountType", xmlRequired:true},
                ListingDuration:{name:"ListingDuration", type:"SecondChanceOfferDurationCodeType", 
                                 xmlRequired:true},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:true},
                Comments:{name:"Comments", type:"string", xmlRequired:true}
            },
            ID:"AddTransactionConfirmationItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"AddTransactionConfirmationItemResponseType",
            fields:{},
            ID:"AddTransactionConfirmationItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"AddTransactionConfirmationItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ApproveLiveAuctionBiddersRequestType",
            fields:{},
            ID:"ApproveLiveAuctionBiddersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                UserCatalogID:{name:"UserCatalogID", type:"int", xmlRequired:false},
                BidApproval:{name:"BidApproval", type:"BidApprovalArrayType", xmlRequired:false},
                ApproveAllPending:{name:"ApproveAllPending", type:"boolean", xmlRequired:false},
                AllApprovedBiddingLimit:{name:"AllApprovedBiddingLimit", type:"AmountType", xmlRequired:false}
            },
            ID:"ApproveLiveAuctionBiddersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ApproveLiveAuctionBiddersResponseType",
            fields:{},
            ID:"ApproveLiveAuctionBiddersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BidderUpdateStatus:{name:"BidderUpdateStatus", type:"LiveAuctionApprovalStatusArrayType", 
                                    xmlRequired:false}
            },
            ID:"ApproveLiveAuctionBiddersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"CompleteSaleRequestType",
            fields:{},
            ID:"CompleteSaleRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                FeedbackInfo:{name:"FeedbackInfo", type:"FeedbackInfoType", xmlRequired:false},
                Shipped:{name:"Shipped", type:"boolean", xmlRequired:false},
                Paid:{name:"Paid", type:"boolean", xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false}
            },
            ID:"CompleteSaleRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"CompleteSaleResponseType",
            fields:{},
            ID:"CompleteSaleResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"CompleteSaleResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"DeleteMyMessagesRequestType",
            fields:{},
            ID:"DeleteMyMessagesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AlertIDs:{name:"AlertIDs", type:"MyMessagesAlertIDArrayType", xmlRequired:false},
                MessageIDs:{name:"MessageIDs", type:"MyMessagesMessageIDArrayType", xmlRequired:false}
            },
            ID:"DeleteMyMessagesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"DeleteMyMessagesResponseType",
            fields:{},
            ID:"DeleteMyMessagesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"DeleteMyMessagesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"EndItemRequestType",
            fields:{},
            ID:"EndItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                EndingReason:{name:"EndingReason", type:"EndReasonCodeType", xmlRequired:false},
                SellerInventoryID:{name:"SellerInventoryID", type:"string", xmlRequired:false}
            },
            ID:"EndItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"EndItemResponseType",
            fields:{},
            ID:"EndItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"EndItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"FetchTokenRequestType",
            fields:{},
            ID:"FetchTokenRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                SecretID:{name:"SecretID", type:"string", xmlRequired:false}
            },
            ID:"FetchTokenRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"FetchTokenResponseType",
            fields:{},
            ID:"FetchTokenResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                eBayAuthToken:{name:"eBayAuthToken", type:"string", xmlRequired:false},
                HardExpirationTime:{name:"HardExpirationTime", type:"dateTime", xmlRequired:false}
            },
            ID:"FetchTokenResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAccountRequestType",
            fields:{},
            ID:"GetAccountRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AccountHistorySelection:{name:"AccountHistorySelection", type:"AccountHistorySelectionCodeType", 
                                         xmlRequired:false},
                InvoiceDate:{name:"InvoiceDate", type:"dateTime", xmlRequired:false},
                BeginDate:{name:"BeginDate", type:"dateTime", xmlRequired:false},
                EndDate:{name:"EndDate", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                ExcludeBalance:{name:"ExcludeBalance", type:"boolean", xmlRequired:false},
                ExcludeSummary:{name:"ExcludeSummary", type:"boolean", xmlRequired:false},
                AccountEntrySortType:{name:"AccountEntrySortType", type:"AccountEntrySortTypeCodeType", 
                                      xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false}
            },
            ID:"GetAccountRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAccountResponseType",
            fields:{},
            ID:"GetAccountResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AccountID:{name:"AccountID", type:"string", xmlRequired:false},
                AccountSummary:{name:"AccountSummary", type:"AccountSummaryType", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                AccountEntries:{name:"AccountEntries", type:"AccountEntriesType", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreEntries:{name:"HasMoreEntries", type:"boolean", xmlRequired:false},
                EntriesPerPage:{name:"EntriesPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false}
            },
            ID:"GetAccountResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAdFormatLeadsRequestType",
            fields:{},
            ID:"GetAdFormatLeadsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Status:{name:"Status", type:"MessageStatusTypeCodeType", xmlRequired:false},
                IncludeMemberMessages:{name:"IncludeMemberMessages", type:"boolean", xmlRequired:false}
            },
            ID:"GetAdFormatLeadsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAdFormatLeadsResponseType",
            fields:{},
            ID:"GetAdFormatLeadsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AdFormatLead:{name:"AdFormatLead", type:"AdFormatLeadType", xmlRequired:false},
                AdFormatLeadCount:{name:"AdFormatLeadCount", type:"int", xmlRequired:false}
            },
            ID:"GetAdFormatLeadsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAllBiddersRequestType",
            fields:{},
            ID:"GetAllBiddersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                CallMode:{name:"CallMode", type:"GetAllBiddersModeCodeType", xmlRequired:false},
                IncludeBiddingSummary:{name:"IncludeBiddingSummary", type:"boolean", xmlRequired:false}
            },
            ID:"GetAllBiddersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAllBiddersResponseType",
            fields:{},
            ID:"GetAllBiddersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BidArray:{name:"BidArray", type:"OfferArrayType", xmlRequired:false},
                HighBidder:{name:"HighBidder", type:"UserIDType", xmlRequired:false},
                HighestBid:{name:"HighestBid", type:"AmountType", xmlRequired:false},
                ListingStatus:{name:"ListingStatus", type:"ListingStatusCodeType", xmlRequired:false}
            },
            ID:"GetAllBiddersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetApiAccessRulesRequestType",
            fields:{},
            ID:"GetApiAccessRulesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetApiAccessRulesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetApiAccessRulesResponseType",
            fields:{},
            ID:"GetApiAccessRulesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ApiAccessRule:{name:"ApiAccessRule", type:"ApiAccessRuleType", xmlRequired:false}
            },
            ID:"GetApiAccessRulesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAttributesCSRequestType",
            fields:{},
            ID:"GetAttributesCSRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:false},
                IncludeCategoryMappingDetails:{name:"IncludeCategoryMappingDetails", type:"boolean", xmlRequired:false},
                DigitalDelivery:{name:"DigitalDelivery", type:"boolean", xmlRequired:false}
            },
            ID:"GetAttributesCSRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAttributesCSResponseType",
            fields:{},
            ID:"GetAttributesCSResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                AttributeData:{name:"AttributeData", type:"string", xmlRequired:false}
            },
            ID:"GetAttributesCSResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAttributesXSLRequestType",
            fields:{},
            ID:"GetAttributesXSLRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FileName:{name:"FileName", type:"string", xmlRequired:false},
                FileVersion:{name:"FileVersion", type:"string", xmlRequired:false}
            },
            ID:"GetAttributesXSLRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetAttributesXSLResponseType",
            fields:{},
            ID:"GetAttributesXSLResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                XSLFile:{name:"XSLFile", type:"XSLFileType", xmlRequired:false}
            },
            ID:"GetAttributesXSLResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetBestOffersRequestType",
            fields:{},
            ID:"GetBestOffersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                BestOfferID:{name:"BestOfferID", type:"BestOfferIDType", xmlRequired:false},
                BestOfferStatus:{name:"BestOfferStatus", type:"BestOfferStatusCodeType", xmlRequired:false}
            },
            ID:"GetBestOffersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetBestOffersResponseType",
            fields:{},
            ID:"GetBestOffersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BestOfferArray:{name:"BestOfferArray", type:"BestOfferArrayType", xmlRequired:false},
                Item:{name:"Item", type:"ItemType", xmlRequired:false}
            },
            ID:"GetBestOffersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetBidderListRequestType",
            fields:{},
            ID:"GetBidderListRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ActiveItemsOnly:{name:"ActiveItemsOnly", type:"boolean", xmlRequired:false},
                EndTimeFrom:{name:"EndTimeFrom", type:"dateTime", xmlRequired:false},
                EndTimeTo:{name:"EndTimeTo", type:"dateTime", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                GranularityLevel:{name:"GranularityLevel", type:"GranularityLevelCodeType", xmlRequired:false}
            },
            ID:"GetBidderListRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetBidderListResponseType",
            fields:{},
            ID:"GetBidderListResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Bidder:{name:"Bidder", type:"UserType", xmlRequired:false},
                BidItemArray:{name:"BidItemArray", type:"ItemArrayType", xmlRequired:false}
            },
            ID:"GetBidderListResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCartRequestType",
            fields:{},
            ID:"GetCartRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AffiliateTrackingDetails:{name:"AffiliateTrackingDetails", type:"AffiliateTrackingDetailsType", 
                                          xmlRequired:false},
                CartID:{name:"CartID", type:"long", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false}
            },
            ID:"GetCartRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCartResponseType",
            fields:{},
            ID:"GetCartResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Cart:{name:"Cart", type:"CartType", xmlRequired:false}
            },
            ID:"GetCartResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoriesRequestType",
            fields:{},
            ID:"GetCategoriesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategorySiteID:{name:"CategorySiteID", type:"string", xmlRequired:false},
                CategoryParent:{name:"CategoryParent", type:"string", xmlRequired:false},
                LevelLimit:{name:"LevelLimit", type:"int", xmlRequired:false},
                ViewAllNodes:{name:"ViewAllNodes", type:"boolean", xmlRequired:false}
            },
            ID:"GetCategoriesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoriesResponseType",
            fields:{},
            ID:"GetCategoriesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CategoryArray:{name:"CategoryArray", type:"CategoryArrayType", xmlRequired:false},
                CategoryCount:{name:"CategoryCount", type:"int", xmlRequired:false},
                UpdateTime:{name:"UpdateTime", type:"dateTime", xmlRequired:false},
                CategoryVersion:{name:"CategoryVersion", type:"string", xmlRequired:false},
                ReservePriceAllowed:{name:"ReservePriceAllowed", type:"boolean", xmlRequired:false},
                MinimumReservePrice:{name:"MinimumReservePrice", type:"double", xmlRequired:false},
                ReduceReserveAllowed:{name:"ReduceReserveAllowed", type:"boolean", xmlRequired:false}
            },
            ID:"GetCategoriesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategory2CSRequestType",
            fields:{},
            ID:"GetCategory2CSRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false}
            },
            ID:"GetCategory2CSRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategory2CSResponseType",
            fields:{},
            ID:"GetCategory2CSResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                MappedCategoryArray:{name:"MappedCategoryArray", type:"CategoryArrayType", xmlRequired:false},
                UnmappedCategoryArray:{name:"UnmappedCategoryArray", type:"CategoryArrayType", xmlRequired:false},
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                SiteWideCharacteristicSets:{name:"SiteWideCharacteristicSets", type:"SiteWideCharacteristicsType", 
                                            xmlRequired:false}
            },
            ID:"GetCategory2CSResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategory2FinanceOfferRequestType",
            fields:{},
            ID:"GetCategory2FinanceOfferRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                LastModifiedDate:{name:"LastModifiedDate", type:"dateTime", xmlRequired:false}
            },
            ID:"GetCategory2FinanceOfferRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategory2FinanceOfferResponseType",
            fields:{},
            ID:"GetCategory2FinanceOfferResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Count:{name:"Count", type:"int", xmlRequired:false},
                CategoryFinanceOfferArray:{name:"CategoryFinanceOfferArray", type:"CategoryFinanceOfferArrayType", 
                                           xmlRequired:false}
            },
            ID:"GetCategory2FinanceOfferResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryFeaturesRequestType",
            fields:{},
            ID:"GetCategoryFeaturesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                LevelLimit:{name:"LevelLimit", type:"int", xmlRequired:false},
                ViewAllNodes:{name:"ViewAllNodes", type:"boolean", xmlRequired:false},
                FeatureID:{name:"FeatureID", type:"FeatureIDCodeType", xmlRequired:false}
            },
            ID:"GetCategoryFeaturesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryFeaturesResponseType",
            fields:{},
            ID:"GetCategoryFeaturesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CategoryVersion:{name:"CategoryVersion", type:"string", xmlRequired:false},
                UpdateTime:{name:"UpdateTime", type:"dateTime", xmlRequired:false},
                Category:{name:"Category", type:"CategoryFeatureType", xmlRequired:false},
                SiteDefaults:{name:"SiteDefaults", type:"SiteDefaultsType", xmlRequired:false},
                FeatureDefinitions:{name:"FeatureDefinitions", type:"FeatureDefinitionsType", xmlRequired:false}
            },
            ID:"GetCategoryFeaturesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryListingsRequestType",
            fields:{},
            ID:"GetCategoryListingsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                MotorsGermanySearchable:{name:"MotorsGermanySearchable", type:"boolean", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                AdFormat:{name:"AdFormat", type:"boolean", xmlRequired:false},
                FreeShipping:{name:"FreeShipping", type:"boolean", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                ItemTypeFilter:{name:"ItemTypeFilter", type:"ItemTypeFilterCodeType", xmlRequired:false},
                SearchType:{name:"SearchType", type:"CategoryListingsSearchCodeType", xmlRequired:false},
                OrderBy:{name:"OrderBy", type:"CategoryListingsOrderCodeType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                SearchLocation:{name:"SearchLocation", type:"SearchLocationType", xmlRequired:false},
                ProximitySearch:{name:"ProximitySearch", type:"ProximitySearchType", xmlRequired:false},
                IncludeGetItFastItems:{name:"IncludeGetItFastItems", type:"boolean", xmlRequired:false},
                PaymentMethod:{name:"PaymentMethod", type:"PaymentMethodSearchCodeType", xmlRequired:false},
                IncludeCondition:{name:"IncludeCondition", type:"boolean", xmlRequired:false},
                IncludeFeedback:{name:"IncludeFeedback", type:"boolean", xmlRequired:false},
                LocalSearchPostalCode:{name:"LocalSearchPostalCode", type:"string", xmlRequired:false},
                MaxRelatedSearchKeywords:{name:"MaxRelatedSearchKeywords", type:"int", xmlRequired:false},
                Group:{name:"Group", type:"GroupType", xmlRequired:false}
            },
            ID:"GetCategoryListingsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryListingsResponseType",
            fields:{},
            ID:"GetCategoryListingsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false},
                Category:{name:"Category", type:"CategoryType", xmlRequired:false},
                SubCategories:{name:"SubCategories", type:"CategoryArrayType", xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:true},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                BuyingGuideDetails:{name:"BuyingGuideDetails", type:"BuyingGuideDetailsType", xmlRequired:false},
                RelatedSearchKeywordArray:{name:"RelatedSearchKeywordArray", type:"RelatedSearchKeywordArrayType", 
                                           xmlRequired:false}
            },
            ID:"GetCategoryListingsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryMappingsRequestType",
            fields:{},
            ID:"GetCategoryMappingsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryVersion:{name:"CategoryVersion", type:"string", xmlRequired:false}
            },
            ID:"GetCategoryMappingsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCategoryMappingsResponseType",
            fields:{},
            ID:"GetCategoryMappingsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CategoryMapping:{name:"CategoryMapping", type:"CategoryMappingType", xmlRequired:false},
                CategoryVersion:{name:"CategoryVersion", type:"string", xmlRequired:false}
            },
            ID:"GetCategoryMappingsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetChallengeTokenRequestType",
            fields:{},
            ID:"GetChallengeTokenRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetChallengeTokenRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetChallengeTokenResponseType",
            fields:{},
            ID:"GetChallengeTokenResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ChallengeToken:{name:"ChallengeToken", type:"string", xmlRequired:false},
                ImageChallengeURL:{name:"ImageChallengeURL", type:"string", xmlRequired:false},
                AudioChallengeURL:{name:"AudioChallengeURL", type:"string", xmlRequired:false}
            },
            ID:"GetChallengeTokenResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCharitiesRequestType",
            fields:{},
            ID:"GetCharitiesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CharityID:{name:"CharityID", type:"string", xmlRequired:false},
                CharityName:{name:"CharityName", type:"string", xmlRequired:false},
                Query:{name:"Query", type:"string", xmlRequired:false},
                CharityRegion:{name:"CharityRegion", type:"int", xmlRequired:false},
                CharityDomain:{name:"CharityDomain", type:"int", xmlRequired:false},
                IncludeDescription:{name:"IncludeDescription", type:"boolean", xmlRequired:false},
                MatchType:{name:"MatchType", type:"StringMatchCodeType", xmlRequired:false}
            },
            ID:"GetCharitiesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCharitiesResponseType",
            fields:{},
            ID:"GetCharitiesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Charity:{name:"Charity", type:"CharityInfoType", xmlRequired:false}
            },
            ID:"GetCharitiesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetContextualKeywordsRequestType",
            fields:{},
            ID:"GetContextualKeywordsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Encoding:{name:"Encoding", type:"string", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false}
            },
            ID:"GetContextualKeywordsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetContextualKeywordsResponseType",
            fields:{},
            ID:"GetContextualKeywordsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ContextSearchAsset:{name:"ContextSearchAsset", type:"ContextSearchAssetType", xmlRequired:false}
            },
            ID:"GetContextualKeywordsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCrossPromotionsRequestType",
            fields:{},
            ID:"GetCrossPromotionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                PromotionMethod:{name:"PromotionMethod", type:"PromotionMethodCodeType", xmlRequired:false},
                PromotionViewMode:{name:"PromotionViewMode", type:"TradingRoleCodeType", xmlRequired:false}
            },
            ID:"GetCrossPromotionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetCrossPromotionsResponseType",
            fields:{},
            ID:"GetCrossPromotionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CrossPromotion:{name:"CrossPromotion", type:"CrossPromotionsType", xmlRequired:false}
            },
            ID:"GetCrossPromotionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetDescriptionTemplatesRequestType",
            fields:{},
            ID:"GetDescriptionTemplatesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                LastModifiedTime:{name:"LastModifiedTime", type:"dateTime", xmlRequired:false},
                MotorVehicles:{name:"MotorVehicles", type:"boolean", xmlRequired:false}
            },
            ID:"GetDescriptionTemplatesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetDescriptionTemplatesResponseType",
            fields:{},
            ID:"GetDescriptionTemplatesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                DescriptionTemplate:{name:"DescriptionTemplate", type:"DescriptionTemplateType", xmlRequired:false},
                LayoutTotal:{name:"LayoutTotal", type:"int", xmlRequired:false},
                ObsoleteLayoutID:{name:"ObsoleteLayoutID", type:"int", xmlRequired:false},
                ObsoleteThemeID:{name:"ObsoleteThemeID", type:"int", xmlRequired:false},
                ThemeGroup:{name:"ThemeGroup", type:"ThemeGroupType", xmlRequired:false},
                ThemeTotal:{name:"ThemeTotal", type:"int", xmlRequired:false}
            },
            ID:"GetDescriptionTemplatesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetDisputeRequestType",
            fields:{},
            ID:"GetDisputeRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DisputeID:{name:"DisputeID", type:"DisputeIDType", xmlRequired:false}
            },
            ID:"GetDisputeRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetDisputeResponseType",
            fields:{},
            ID:"GetDisputeResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Dispute:{name:"Dispute", type:"DisputeType", xmlRequired:false}
            },
            ID:"GetDisputeResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetFeedbackRequestType",
            fields:{},
            ID:"GetFeedbackRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                FeedbackID:{name:"FeedbackID", type:"string", xmlRequired:false}
            },
            ID:"GetFeedbackRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetFeedbackResponseType",
            fields:{},
            ID:"GetFeedbackResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                FeedbackDetailArray:{name:"FeedbackDetailArray", type:"FeedbackDetailArrayType", xmlRequired:false},
                FeedbackDetailItemTotal:{name:"FeedbackDetailItemTotal", type:"int", xmlRequired:false},
                FeedbackSummary:{name:"FeedbackSummary", type:"FeedbackSummaryType", xmlRequired:false},
                FeedbackScore:{name:"FeedbackScore", type:"int", xmlRequired:false}
            },
            ID:"GetFeedbackResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetFinanceOffersRequestType",
            fields:{},
            ID:"GetFinanceOffersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FinanceOfferID:{name:"FinanceOfferID", type:"string", xmlRequired:false},
                LastModifiedDate:{name:"LastModifiedDate", type:"dateTime", xmlRequired:false}
            },
            ID:"GetFinanceOffersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetFinanceOffersResponseType",
            fields:{},
            ID:"GetFinanceOffersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Count:{name:"Count", type:"int", xmlRequired:false},
                FinanceOfferArray:{name:"FinanceOfferArray", type:"FinanceOfferArrayType", xmlRequired:false}
            },
            ID:"GetFinanceOffersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetHighBiddersRequestType",
            fields:{},
            ID:"GetHighBiddersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"GetHighBiddersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetHighBiddersResponseType",
            fields:{},
            ID:"GetHighBiddersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BidArray:{name:"BidArray", type:"OfferArrayType", xmlRequired:false},
                ListingStatus:{name:"ListingStatus", type:"ListingStatusCodeType", xmlRequired:false}
            },
            ID:"GetHighBiddersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemRequestType",
            fields:{},
            ID:"GetItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                IncludeExpressRequirements:{name:"IncludeExpressRequirements", type:"boolean", xmlRequired:false},
                IncludeWatchCount:{name:"IncludeWatchCount", type:"boolean", xmlRequired:false},
                IncludeCrossPromotion:{name:"IncludeCrossPromotion", type:"boolean", xmlRequired:false}
            },
            ID:"GetItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemResponseType",
            fields:{},
            ID:"GetItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false}
            },
            ID:"GetItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemRecommendationsRequestType",
            fields:{},
            ID:"GetItemRecommendationsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                GetRecommendationsRequestContainer:{name:"GetRecommendationsRequestContainer", 
                                                    type:"GetRecommendationsRequestContainerType",xmlRequired:false}
            },
            ID:"GetItemRecommendationsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemRecommendationsResponseType",
            fields:{},
            ID:"GetItemRecommendationsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                GetRecommendationsResponseContainer:{name:"GetRecommendationsResponseContainer", 
                                                     type:"GetRecommendationsResponseContainerType",xmlRequired:false}
            },
            ID:"GetItemRecommendationsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemShippingRequestType",
            fields:{},
            ID:"GetItemShippingRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                QuantitySold:{name:"QuantitySold", type:"int", xmlRequired:false},
                DestinationPostalCode:{name:"DestinationPostalCode", type:"string", xmlRequired:false},
                DestinationCountryCode:{name:"DestinationCountryCode", type:"CountryCodeType", xmlRequired:false}
            },
            ID:"GetItemShippingRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemShippingResponseType",
            fields:{},
            ID:"GetItemShippingResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ShippingDetails:{name:"ShippingDetails", type:"ShippingDetailsType", xmlRequired:false}
            },
            ID:"GetItemShippingResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemTransactionsRequestType",
            fields:{},
            ID:"GetItemTransactionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                ModTimeFrom:{name:"ModTimeFrom", type:"dateTime", xmlRequired:false},
                ModTimeTo:{name:"ModTimeTo", type:"dateTime", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                IncludeFinalValueFee:{name:"IncludeFinalValueFee", type:"boolean", xmlRequired:false},
                IncludeContainingOrder:{name:"IncludeContainingOrder", type:"boolean", xmlRequired:false}
            },
            ID:"GetItemTransactionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemTransactionsResponseType",
            fields:{},
            ID:"GetItemTransactionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreTransactions:{name:"HasMoreTransactions", type:"boolean", xmlRequired:false},
                TransactionsPerPage:{name:"TransactionsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ReturnedTransactionCountActual:{name:"ReturnedTransactionCountActual", type:"int", xmlRequired:false},
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                TransactionArray:{name:"TransactionArray", type:"TransactionArrayType", xmlRequired:false},
                PayPalPreferred:{name:"PayPalPreferred", type:"boolean", xmlRequired:false}
            },
            ID:"GetItemTransactionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemsAwaitingFeedbackRequestType",
            fields:{},
            ID:"GetItemsAwaitingFeedbackRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Sort:{name:"Sort", type:"ItemSortTypeCodeType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetItemsAwaitingFeedbackRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetItemsAwaitingFeedbackResponseType",
            fields:{},
            ID:"GetItemsAwaitingFeedbackResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemsAwaitingFeedback:{name:"ItemsAwaitingFeedback", type:"PaginatedTransactionArrayType", 
                                       xmlRequired:false}
            },
            ID:"GetItemsAwaitingFeedbackResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetLiveAuctionBiddersRequestType",
            fields:{},
            ID:"GetLiveAuctionBiddersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                UserCatalogID:{name:"UserCatalogID", type:"int", xmlRequired:false},
                BidderStatus:{name:"BidderStatus", type:"BidderStatusCodeType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetLiveAuctionBiddersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetLiveAuctionBiddersResponseType",
            fields:{},
            ID:"GetLiveAuctionBiddersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BidderDetails:{name:"BidderDetails", type:"BidderDetailArrayType", xmlRequired:false},
                TotalPending:{name:"TotalPending", type:"int", xmlRequired:false},
                TotalApproved:{name:"TotalApproved", type:"int", xmlRequired:false},
                TotalDenied:{name:"TotalDenied", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"GetLiveAuctionBiddersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetLiveAuctionCatalogDetailsRequestType",
            fields:{},
            ID:"GetLiveAuctionCatalogDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetLiveAuctionCatalogDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetLiveAuctionCatalogDetailsResponseType",
            fields:{},
            ID:"GetLiveAuctionCatalogDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                LiveAuctionCatalog:{name:"LiveAuctionCatalog", type:"LiveAuctionCatalogType", xmlRequired:false}
            },
            ID:"GetLiveAuctionCatalogDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMemberMessagesRequestType",
            fields:{},
            ID:"GetMemberMessagesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                MailMessageType:{name:"MailMessageType", type:"MessageTypeCodeType", xmlRequired:false},
                MessageStatus:{name:"MessageStatus", type:"MessageStatusTypeCodeType", xmlRequired:false},
                DisplayToPublic:{name:"DisplayToPublic", type:"boolean", xmlRequired:false},
                StartCreationTime:{name:"StartCreationTime", type:"dateTime", xmlRequired:false},
                EndCreationTime:{name:"EndCreationTime", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                MemberMessageID:{name:"MemberMessageID", type:"string", xmlRequired:false},
                SenderID:{name:"SenderID", type:"UserIDType", xmlRequired:false}
            },
            ID:"GetMemberMessagesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMemberMessagesResponseType",
            fields:{},
            ID:"GetMemberMessagesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                MemberMessage:{name:"MemberMessage", type:"MemberMessageExchangeArrayType", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:false}
            },
            ID:"GetMemberMessagesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMessagePreferencesRequestType",
            fields:{},
            ID:"GetMessagePreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                SellerID:{name:"SellerID", type:"UserIDType", xmlRequired:false},
                IncludeASQPreferences:{name:"IncludeASQPreferences", type:"boolean", xmlRequired:false}
            },
            ID:"GetMessagePreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMessagePreferencesResponseType",
            fields:{},
            ID:"GetMessagePreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ASQPreferences:{name:"ASQPreferences", type:"ASQPreferencesType", xmlRequired:false}
            },
            ID:"GetMessagePreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyMessagesRequestType",
            fields:{},
            ID:"GetMyMessagesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AlertIDs:{name:"AlertIDs", type:"MyMessagesAlertIDArrayType", xmlRequired:false},
                MessageIDs:{name:"MessageIDs", type:"MyMessagesMessageIDArrayType", xmlRequired:false},
                FolderID:{name:"FolderID", type:"long", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"GetMyMessagesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyMessagesResponseType",
            fields:{},
            ID:"GetMyMessagesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Summary:{name:"Summary", type:"MyMessagesSummaryType", xmlRequired:false},
                Alerts:{name:"Alerts", type:"MyMessagesAlertArrayType", xmlRequired:false},
                Messages:{name:"Messages", type:"MyMessagesMessageArrayType", xmlRequired:false}
            },
            ID:"GetMyMessagesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBayBuyingRequestType",
            fields:{},
            ID:"GetMyeBayBuyingRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                WatchList:{name:"WatchList", type:"ItemListCustomizationType", xmlRequired:false},
                BidList:{name:"BidList", type:"ItemListCustomizationType", xmlRequired:false},
                BestOfferList:{name:"BestOfferList", type:"ItemListCustomizationType", xmlRequired:false},
                WonList:{name:"WonList", type:"ItemListCustomizationType", xmlRequired:false},
                LostList:{name:"LostList", type:"ItemListCustomizationType", xmlRequired:false},
                FavoriteSearches:{name:"FavoriteSearches", type:"MyeBaySelectionType", xmlRequired:false},
                FavoriteSellers:{name:"FavoriteSellers", type:"MyeBaySelectionType", xmlRequired:false},
                SecondChanceOffer:{name:"SecondChanceOffer", type:"MyeBaySelectionType", xmlRequired:false},
                BidAssistantList:{name:"BidAssistantList", type:"BidAssistantListType", xmlRequired:false}
            },
            ID:"GetMyeBayBuyingRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBayBuyingResponseType",
            fields:{},
            ID:"GetMyeBayBuyingResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BuyingSummary:{name:"BuyingSummary", type:"BuyingSummaryType", xmlRequired:false},
                WatchList:{name:"WatchList", type:"PaginatedItemArrayType", xmlRequired:false},
                BidList:{name:"BidList", type:"PaginatedItemArrayType", xmlRequired:false},
                BestOfferList:{name:"BestOfferList", type:"PaginatedItemArrayType", xmlRequired:false},
                WonList:{name:"WonList", type:"PaginatedOrderTransactionArrayType", xmlRequired:false},
                LostList:{name:"LostList", type:"PaginatedItemArrayType", xmlRequired:false},
                FavoriteSearches:{name:"FavoriteSearches", type:"MyeBayFavoriteSearchListType", xmlRequired:false},
                FavoriteSellers:{name:"FavoriteSellers", type:"MyeBayFavoriteSellerListType", xmlRequired:false},
                SecondChanceOffer:{name:"SecondChanceOffer", type:"ItemType", xmlRequired:false},
                BidAssistantList:{name:"BidAssistantList", type:"BidGroupArrayType", xmlRequired:false}
            },
            ID:"GetMyeBayBuyingResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBayRemindersRequestType",
            fields:{},
            ID:"GetMyeBayRemindersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                BuyingReminders:{name:"BuyingReminders", type:"ReminderCustomizationType", xmlRequired:false},
                SellingReminders:{name:"SellingReminders", type:"ReminderCustomizationType", xmlRequired:false}
            },
            ID:"GetMyeBayRemindersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBayRemindersResponseType",
            fields:{},
            ID:"GetMyeBayRemindersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BuyingReminders:{name:"BuyingReminders", type:"RemindersType", xmlRequired:false},
                SellingReminders:{name:"SellingReminders", type:"RemindersType", xmlRequired:false}
            },
            ID:"GetMyeBayRemindersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBaySellingRequestType",
            fields:{},
            ID:"GetMyeBaySellingRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ScheduledList:{name:"ScheduledList", type:"ItemListCustomizationType", xmlRequired:false},
                ActiveList:{name:"ActiveList", type:"ItemListCustomizationType", xmlRequired:false},
                SoldList:{name:"SoldList", type:"ItemListCustomizationType", xmlRequired:false},
                UnsoldList:{name:"UnsoldList", type:"ItemListCustomizationType", xmlRequired:false}
            },
            ID:"GetMyeBaySellingRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetMyeBaySellingResponseType",
            fields:{},
            ID:"GetMyeBaySellingResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                SellingSummary:{name:"SellingSummary", type:"SellingSummaryType", xmlRequired:false},
                ScheduledList:{name:"ScheduledList", type:"PaginatedItemArrayType", xmlRequired:false},
                ActiveList:{name:"ActiveList", type:"PaginatedItemArrayType", xmlRequired:false},
                SoldList:{name:"SoldList", type:"PaginatedOrderTransactionArrayType", xmlRequired:false},
                UnsoldList:{name:"UnsoldList", type:"PaginatedItemArrayType", xmlRequired:false},
                Summary:{name:"Summary", type:"MyeBaySellingSummaryType", xmlRequired:false}
            },
            ID:"GetMyeBaySellingResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetNotificationPreferencesRequestType",
            fields:{},
            ID:"GetNotificationPreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PreferenceLevel:{name:"PreferenceLevel", type:"NotificationRoleCodeType", xmlRequired:false}
            },
            ID:"GetNotificationPreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetNotificationPreferencesResponseType",
            fields:{},
            ID:"GetNotificationPreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ApplicationDeliveryPreferences:{name:"ApplicationDeliveryPreferences", type:"ApplicationDeliveryPreferencesType", 
                                                xmlRequired:false},
                UserDeliveryPreferenceArray:{name:"UserDeliveryPreferenceArray", type:"NotificationEnableArrayType", 
                                             xmlRequired:false},
                UserData:{name:"UserData", type:"NotificationUserDataType", xmlRequired:false},
                EventProperty:{name:"EventProperty", type:"NotificationEventPropertyType", xmlRequired:false}
            },
            ID:"GetNotificationPreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetNotificationsUsageRequestType",
            fields:{},
            ID:"GetNotificationsUsageRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"GetNotificationsUsageRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetNotificationsUsageResponseType",
            fields:{},
            ID:"GetNotificationsUsageResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                NotificationDetailsArray:{name:"NotificationDetailsArray", type:"NotificationDetailsArrayType", 
                                          xmlRequired:false},
                MarkUpMarkDownHistory:{name:"MarkUpMarkDownHistory", type:"MarkUpMarkDownHistoryType", 
                                       xmlRequired:false},
                NotificationStatistics:{name:"NotificationStatistics", type:"NotificationStatisticsType", 
                                        xmlRequired:false}
            },
            ID:"GetNotificationsUsageResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetOrderTransactionsRequestType",
            fields:{},
            ID:"GetOrderTransactionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemTransactionIDArray:{name:"ItemTransactionIDArray", type:"ItemTransactionIDArrayType", 
                                        xmlRequired:false},
                OrderIDArray:{name:"OrderIDArray", type:"OrderIDArrayType", xmlRequired:false}
            },
            ID:"GetOrderTransactionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetOrderTransactionsResponseType",
            fields:{},
            ID:"GetOrderTransactionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                OrderArray:{name:"OrderArray", type:"OrderArrayType", xmlRequired:false}
            },
            ID:"GetOrderTransactionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetOrdersRequestType",
            fields:{},
            ID:"GetOrdersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                OrderIDArray:{name:"OrderIDArray", type:"OrderIDArrayType", xmlRequired:false},
                CreateTimeFrom:{name:"CreateTimeFrom", type:"dateTime", xmlRequired:false},
                CreateTimeTo:{name:"CreateTimeTo", type:"dateTime", xmlRequired:false},
                OrderRole:{name:"OrderRole", type:"TradingRoleCodeType", xmlRequired:false},
                OrderStatus:{name:"OrderStatus", type:"OrderStatusCodeType", xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetOrdersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetOrdersResponseType",
            fields:{},
            ID:"GetOrdersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreOrders:{name:"HasMoreOrders", type:"boolean", xmlRequired:false},
                OrderArray:{name:"OrderArray", type:"OrderArrayType", xmlRequired:false},
                OrdersPerPage:{name:"OrdersPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ReturnedOrderCountActual:{name:"ReturnedOrderCountActual", type:"int", xmlRequired:false}
            },
            ID:"GetOrdersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPictureManagerDetailsRequestType",
            fields:{},
            ID:"GetPictureManagerDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FolderID:{name:"FolderID", type:"int", xmlRequired:false},
                PictureURL:{name:"PictureURL", type:"string", xmlRequired:false},
                PictureManagerDetailLevel:{name:"PictureManagerDetailLevel", type:"PictureManagerDetailLevelCodeType", 
                                           xmlRequired:false}
            },
            ID:"GetPictureManagerDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPictureManagerDetailsResponseType",
            fields:{},
            ID:"GetPictureManagerDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PictureManagerDetails:{name:"PictureManagerDetails", type:"PictureManagerDetailsType", 
                                       xmlRequired:false}
            },
            ID:"GetPictureManagerDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPictureManagerOptionsRequestType",
            fields:{},
            ID:"GetPictureManagerOptionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetPictureManagerOptionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPictureManagerOptionsResponseType",
            fields:{},
            ID:"GetPictureManagerOptionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Subscription:{name:"Subscription", type:"PictureManagerSubscriptionType", xmlRequired:false},
                PictureType:{name:"PictureType", type:"PictureManagerPictureDisplayType", xmlRequired:false}
            },
            ID:"GetPictureManagerOptionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPopularKeywordsRequestType",
            fields:{},
            ID:"GetPopularKeywordsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                IncludeChildCategories:{name:"IncludeChildCategories", type:"boolean", xmlRequired:false},
                MaxKeywordsRetrieved:{name:"MaxKeywordsRetrieved", type:"int", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetPopularKeywordsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPopularKeywordsResponseType",
            fields:{},
            ID:"GetPopularKeywordsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                CategoryArray:{name:"CategoryArray", type:"CategoryArrayType", xmlRequired:false},
                HasMore:{name:"HasMore", type:"boolean", xmlRequired:false}
            },
            ID:"GetPopularKeywordsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFamilyMembersRequestType",
            fields:{},
            ID:"GetProductFamilyMembersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ProductSearch:{name:"ProductSearch", type:"ProductSearchType", xmlRequired:false}
            },
            ID:"GetProductFamilyMembersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFamilyMembersResponseType",
            fields:{},
            ID:"GetProductFamilyMembersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                DataElementSets:{name:"DataElementSets", type:"DataElementSetType", xmlRequired:false},
                ProductSearchResult:{name:"ProductSearchResult", type:"ProductSearchResultType", xmlRequired:false}
            },
            ID:"GetProductFamilyMembersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFinderRequestType",
            fields:{},
            ID:"GetProductFinderRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                ProductFinderID:{name:"ProductFinderID", type:"int", xmlRequired:false}
            },
            ID:"GetProductFinderRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFinderResponseType",
            fields:{},
            ID:"GetProductFinderResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                ProductFinderData:{name:"ProductFinderData", type:"string", xmlRequired:false}
            },
            ID:"GetProductFinderResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFinderXSLRequestType",
            fields:{},
            ID:"GetProductFinderXSLRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FileName:{name:"FileName", type:"string", xmlRequired:false},
                FileVersion:{name:"FileVersion", type:"string", xmlRequired:false}
            },
            ID:"GetProductFinderXSLRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductFinderXSLResponseType",
            fields:{},
            ID:"GetProductFinderXSLResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                XSLFile:{name:"XSLFile", type:"XSLFileType", xmlRequired:false}
            },
            ID:"GetProductFinderXSLResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSearchPageRequestType",
            fields:{},
            ID:"GetProductSearchPageRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:true}
            },
            ID:"GetProductSearchPageRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSearchPageResponseType",
            fields:{},
            ID:"GetProductSearchPageResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                AttributeSystemVersion:{name:"AttributeSystemVersion", type:"string", xmlRequired:false},
                ProductSearchPage:{name:"ProductSearchPage", type:"ProductSearchPageType", xmlRequired:false}
            },
            ID:"GetProductSearchPageResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSearchResultsRequestType",
            fields:{},
            ID:"GetProductSearchResultsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ProductSearch:{name:"ProductSearch", type:"ProductSearchType", xmlRequired:false}
            },
            ID:"GetProductSearchResultsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSearchResultsResponseType",
            fields:{},
            ID:"GetProductSearchResultsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                DataElementSets:{name:"DataElementSets", type:"DataElementSetType", xmlRequired:false},
                ProductSearchResult:{name:"ProductSearchResult", type:"ProductSearchResultType", xmlRequired:false}
            },
            ID:"GetProductSearchResultsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSellingPagesRequestType",
            fields:{},
            ID:"GetProductSellingPagesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                UseCase:{name:"UseCase", type:"ProductUseCaseCodeType", xmlRequired:false},
                Product:{name:"Product", type:"ProductType", xmlRequired:false}
            },
            ID:"GetProductSellingPagesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductSellingPagesResponseType",
            fields:{},
            ID:"GetProductSellingPagesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ProductSellingPagesData:{name:"ProductSellingPagesData", type:"string", xmlRequired:false}
            },
            ID:"GetProductSellingPagesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductsRequestType",
            fields:{},
            ID:"GetProductsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ProductSearch:{name:"ProductSearch", type:"ProductSearchType", xmlRequired:false},
                ProductSort:{name:"ProductSort", type:"ProductSortCodeType", xmlRequired:false},
                IncludeItemArray:{name:"IncludeItemArray", type:"boolean", xmlRequired:false},
                IncludeReviewDetails:{name:"IncludeReviewDetails", type:"boolean", xmlRequired:false},
                IncludeBuyingGuideDetails:{name:"IncludeBuyingGuideDetails", type:"boolean", xmlRequired:false},
                IncludeHistogram:{name:"IncludeHistogram", type:"boolean", xmlRequired:false},
                AffiliateTrackingDetails:{name:"AffiliateTrackingDetails", type:"AffiliateTrackingDetailsType", 
                                          xmlRequired:false}
            },
            ID:"GetProductsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetProductsResponseType",
            fields:{},
            ID:"GetProductsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CharacteristicsSetProductHistogram:{name:"CharacteristicsSetProductHistogram", 
                                                    type:"CharacteristicsSetProductHistogramType",xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ApproximatePages:{name:"ApproximatePages", type:"int", xmlRequired:false},
                HasMore:{name:"HasMore", type:"boolean", xmlRequired:false},
                TotalProducts:{name:"TotalProducts", type:"int", xmlRequired:false},
                Product:{name:"Product", type:"CatalogProductType", xmlRequired:false},
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false},
                BuyingGuideDetails:{name:"BuyingGuideDetails", type:"BuyingGuideDetailsType", xmlRequired:false}
            },
            ID:"GetProductsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPromotionRulesRequestType",
            fields:{},
            ID:"GetPromotionRulesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                StoreCategoryID:{name:"StoreCategoryID", type:"long", xmlRequired:false},
                PromotionMethod:{name:"PromotionMethod", type:"PromotionMethodCodeType", xmlRequired:false}
            },
            ID:"GetPromotionRulesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPromotionRulesResponseType",
            fields:{},
            ID:"GetPromotionRulesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PromotionRuleArray:{name:"PromotionRuleArray", type:"PromotionRuleArrayType", xmlRequired:false}
            },
            ID:"GetPromotionRulesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPromotionalSaleDetailsRequestType",
            fields:{},
            ID:"GetPromotionalSaleDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PromotionalSaleID:{name:"PromotionalSaleID", type:"long", xmlRequired:false}
            },
            ID:"GetPromotionalSaleDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetPromotionalSaleDetailsResponseType",
            fields:{},
            ID:"GetPromotionalSaleDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PromotionalSaleDetails:{name:"PromotionalSaleDetails", type:"PromotionalSaleArrayType", 
                                        xmlRequired:false}
            },
            ID:"GetPromotionalSaleDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetReturnURLRequestType",
            fields:{},
            ID:"GetReturnURLRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetReturnURLRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetReturnURLResponseType",
            fields:{},
            ID:"GetReturnURLResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ApplicationDisplayName:{name:"ApplicationDisplayName", type:"string", xmlRequired:false},
                AuthenticationEntryArray:{name:"AuthenticationEntryArray", type:"AuthenticationEntryArrayType", 
                                          xmlRequired:false}
            },
            ID:"GetReturnURLResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetRuNameRequestType",
            fields:{},
            ID:"GetRuNameRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ClientUseCase:{name:"ClientUseCase", type:"string", xmlRequired:false}
            },
            ID:"GetRuNameRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetRuNameResponseType",
            fields:{},
            ID:"GetRuNameResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                RuName:{name:"RuName", type:"string", xmlRequired:false}
            },
            ID:"GetRuNameResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSearchResultsRequestType",
            fields:{},
            ID:"GetSearchResultsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                MotorsGermanySearchable:{name:"MotorsGermanySearchable", type:"boolean", xmlRequired:false},
                Query:{name:"Query", type:"string", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                SearchFlags:{name:"SearchFlags", type:"SearchFlagsCodeType", xmlRequired:false},
                PriceRangeFilter:{name:"PriceRangeFilter", type:"PriceRangeFilterType", xmlRequired:false},
                ProximitySearch:{name:"ProximitySearch", type:"ProximitySearchType", xmlRequired:false},
                ItemTypeFilter:{name:"ItemTypeFilter", type:"ItemTypeFilterCodeType", xmlRequired:false},
                SearchType:{name:"SearchType", type:"SearchTypeCodeType", xmlRequired:false},
                UserIdFilter:{name:"UserIdFilter", type:"UserIdFilterType", xmlRequired:false},
                SearchLocationFilter:{name:"SearchLocationFilter", type:"SearchLocationFilterType", xmlRequired:false},
                StoreSearchFilter:{name:"StoreSearchFilter", type:"SearchStoreFilterType", xmlRequired:false},
                Order:{name:"Order", type:"SearchSortOrderCodeType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                SearchRequest:{name:"SearchRequest", type:"SearchRequestType", xmlRequired:false},
                ProductID:{name:"ProductID", type:"string", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false},
                Categories:{name:"Categories", type:"RequestCategoriesType", xmlRequired:false},
                TotalOnly:{name:"TotalOnly", type:"boolean", xmlRequired:false},
                EndTimeFrom:{name:"EndTimeFrom", type:"dateTime", xmlRequired:false},
                EndTimeTo:{name:"EndTimeTo", type:"dateTime", xmlRequired:false},
                ModTimeFrom:{name:"ModTimeFrom", type:"dateTime", xmlRequired:false},
                IncludeGetItFastItems:{name:"IncludeGetItFastItems", type:"boolean", xmlRequired:false},
                PaymentMethod:{name:"PaymentMethod", type:"PaymentMethodSearchCodeType", xmlRequired:false},
                GranularityLevel:{name:"GranularityLevel", type:"GranularityLevelCodeType", xmlRequired:false},
                ExpandSearch:{name:"ExpandSearch", type:"boolean", xmlRequired:false},
                Lot:{name:"Lot", type:"boolean", xmlRequired:false},
                AdFormat:{name:"AdFormat", type:"boolean", xmlRequired:false},
                FreeShipping:{name:"FreeShipping", type:"boolean", xmlRequired:false},
                Quantity:{name:"Quantity", type:"int", xmlRequired:false},
                QuantityOperator:{name:"QuantityOperator", type:"QuantityOperatorCodeType", xmlRequired:false},
                SellerBusinessType:{name:"SellerBusinessType", type:"SellerBusinessCodeType", xmlRequired:false},
                DigitalDelivery:{name:"DigitalDelivery", type:"boolean", xmlRequired:false},
                IncludeCondition:{name:"IncludeCondition", type:"boolean", xmlRequired:false},
                IncludeFeedback:{name:"IncludeFeedback", type:"boolean", xmlRequired:false},
                CharityID:{name:"CharityID", type:"int", xmlRequired:false},
                LocalSearchPostalCode:{name:"LocalSearchPostalCode", type:"string", xmlRequired:false},
                MaxRelatedSearchKeywords:{name:"MaxRelatedSearchKeywords", type:"int", xmlRequired:false},
                AffiliateTrackingDetails:{name:"AffiliateTrackingDetails", type:"AffiliateTrackingDetailsType", 
                                          xmlRequired:false},
                BidRange:{name:"BidRange", type:"BidRangeType", xmlRequired:false},
                ItemCondition:{name:"ItemCondition", type:"ItemConditionCodeType", xmlRequired:false},
                TicketFinder:{name:"TicketFinder", type:"TicketDetailsType", xmlRequired:false},
                Group:{name:"Group", type:"GroupType", xmlRequired:false}
            },
            ID:"GetSearchResultsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSearchResultsResponseType",
            fields:{},
            ID:"GetSearchResultsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                SearchResultItemArray:{name:"SearchResultItemArray", type:"SearchResultItemArrayType", 
                                       xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:true},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                CategoryArray:{name:"CategoryArray", type:"CategoryArrayType", xmlRequired:false},
                BuyingGuideDetails:{name:"BuyingGuideDetails", type:"BuyingGuideDetailsType", xmlRequired:false},
                StoreExpansionArray:{name:"StoreExpansionArray", type:"ExpansionArrayType", xmlRequired:false},
                InternationalExpansionArray:{name:"InternationalExpansionArray", type:"ExpansionArrayType", 
                                             xmlRequired:false},
                FilterRemovedExpansionArray:{name:"FilterRemovedExpansionArray", type:"ExpansionArrayType", 
                                             xmlRequired:false},
                AllCategoriesExpansionArray:{name:"AllCategoriesExpansionArray", type:"ExpansionArrayType", 
                                             xmlRequired:false},
                SpellingSuggestion:{name:"SpellingSuggestion", type:"SpellingSuggestionType", xmlRequired:false},
                RelatedSearchKeywordArray:{name:"RelatedSearchKeywordArray", type:"RelatedSearchKeywordArrayType", 
                                           xmlRequired:false}
            },
            ID:"GetSearchResultsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSearchResultsExpressRequestType",
            fields:{},
            ID:"GetSearchResultsExpressRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Query:{name:"Query", type:"string", xmlRequired:false},
                ExternalProductIDType:{name:"ExternalProductIDType", type:"ExternalProductCodeType", xmlRequired:false},
                ExternalProductIDValue:{name:"ExternalProductIDValue", type:"string", xmlRequired:false},
                ProductReferenceID:{name:"ProductReferenceID", type:"long", xmlRequired:false},
                DepartmentName:{name:"DepartmentName", type:"string", xmlRequired:false},
                AisleName:{name:"AisleName", type:"string", xmlRequired:false},
                ProductTypeName:{name:"ProductTypeName", type:"string", xmlRequired:false},
                HistogramSort:{name:"HistogramSort", type:"ExpressHistogramSortCodeType", xmlRequired:false},
                ItemSort:{name:"ItemSort", type:"ExpressItemSortCodeType", xmlRequired:false},
                ProductSort:{name:"ProductSort", type:"ExpressProductSortCodeType", xmlRequired:false},
                HighestPrice:{name:"HighestPrice", type:"AmountType", xmlRequired:false},
                LowestPrice:{name:"LowestPrice", type:"AmountType", xmlRequired:false},
                Condition:{name:"Condition", type:"ConditionSelectionCodeType", xmlRequired:false},
                SellerID:{name:"SellerID", type:"UserIDType", xmlRequired:false},
                PostalCode:{name:"PostalCode", type:"string", xmlRequired:false},
                HistogramDetails:{name:"HistogramDetails", type:"ExpressDetailLevelCodeType", xmlRequired:false},
                ProductDetails:{name:"ProductDetails", type:"ExpressDetailLevelCodeType", xmlRequired:false},
                ItemDetails:{name:"ItemDetails", type:"ExpressDetailLevelCodeType", xmlRequired:false},
                EntriesPerPage:{name:"EntriesPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                AffiliateTrackingDetails:{name:"AffiliateTrackingDetails", type:"AffiliateTrackingDetailsType", 
                                          xmlRequired:false}
            },
            ID:"GetSearchResultsExpressRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSearchResultsExpressResponseType",
            fields:{},
            ID:"GetSearchResultsExpressResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Histogram:{name:"Histogram", type:"DomainHistogramType", xmlRequired:false},
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false},
                ProductArray:{name:"ProductArray", type:"ProductArrayType", xmlRequired:false},
                EntriesPerPage:{name:"EntriesPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                HasMoreEntries:{name:"HasMoreEntries", type:"boolean", xmlRequired:true}
            },
            ID:"GetSearchResultsExpressResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerEventsRequestType",
            fields:{},
            ID:"GetSellerEventsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                StartTimeFrom:{name:"StartTimeFrom", type:"dateTime", xmlRequired:false},
                StartTimeTo:{name:"StartTimeTo", type:"dateTime", xmlRequired:false},
                EndTimeFrom:{name:"EndTimeFrom", type:"dateTime", xmlRequired:false},
                EndTimeTo:{name:"EndTimeTo", type:"dateTime", xmlRequired:false},
                ModTimeFrom:{name:"ModTimeFrom", type:"dateTime", xmlRequired:false},
                ModTimeTo:{name:"ModTimeTo", type:"dateTime", xmlRequired:false},
                NewItemFilter:{name:"NewItemFilter", type:"boolean", xmlRequired:false},
                IncludeWatchCount:{name:"IncludeWatchCount", type:"boolean", xmlRequired:false}
            },
            ID:"GetSellerEventsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerEventsResponseType",
            fields:{},
            ID:"GetSellerEventsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                TimeTo:{name:"TimeTo", type:"dateTime", xmlRequired:false},
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false}
            },
            ID:"GetSellerEventsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerListRequestType",
            fields:{},
            ID:"GetSellerListRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                MotorsDealerUsers:{name:"MotorsDealerUsers", type:"UserIDArrayType", xmlRequired:false},
                EndTimeFrom:{name:"EndTimeFrom", type:"dateTime", xmlRequired:false},
                EndTimeTo:{name:"EndTimeTo", type:"dateTime", xmlRequired:false},
                Sort:{name:"Sort", type:"int", xmlRequired:false},
                StartTimeFrom:{name:"StartTimeFrom", type:"dateTime", xmlRequired:false},
                StartTimeTo:{name:"StartTimeTo", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                GranularityLevel:{name:"GranularityLevel", type:"GranularityLevelCodeType", xmlRequired:false},
                SKUArray:{name:"SKUArray", type:"SKUArrayType", xmlRequired:false},
                IncludeWatchCount:{name:"IncludeWatchCount", type:"boolean", xmlRequired:false}
            },
            ID:"GetSellerListRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerListResponseType",
            fields:{},
            ID:"GetSellerListResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:false},
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ReturnedItemCountActual:{name:"ReturnedItemCountActual", type:"int", xmlRequired:false},
                Seller:{name:"Seller", type:"UserType", xmlRequired:false}
            },
            ID:"GetSellerListResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerPaymentsRequestType",
            fields:{},
            ID:"GetSellerPaymentsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PaymentStatus:{name:"PaymentStatus", type:"RCSPaymentStatusCodeType", xmlRequired:false},
                PaymentTimeFrom:{name:"PaymentTimeFrom", type:"dateTime", xmlRequired:false},
                PaymentTimeTo:{name:"PaymentTimeTo", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetSellerPaymentsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerPaymentsResponseType",
            fields:{},
            ID:"GetSellerPaymentsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMorePayments:{name:"HasMorePayments", type:"boolean", xmlRequired:false},
                SellerPayment:{name:"SellerPayment", type:"SellerPaymentType", xmlRequired:false},
                PaymentsPerPage:{name:"PaymentsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ReturnedPaymentCountActual:{name:"ReturnedPaymentCountActual", type:"int", xmlRequired:false}
            },
            ID:"GetSellerPaymentsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerTransactionsRequestType",
            fields:{},
            ID:"GetSellerTransactionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ModTimeFrom:{name:"ModTimeFrom", type:"dateTime", xmlRequired:false},
                ModTimeTo:{name:"ModTimeTo", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                IncludeFinalValueFee:{name:"IncludeFinalValueFee", type:"boolean", xmlRequired:false},
                IncludeContainingOrder:{name:"IncludeContainingOrder", type:"boolean", xmlRequired:false},
                SKUArray:{name:"SKUArray", type:"SKUArrayType", xmlRequired:false}
            },
            ID:"GetSellerTransactionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSellerTransactionsResponseType",
            fields:{},
            ID:"GetSellerTransactionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreTransactions:{name:"HasMoreTransactions", type:"boolean", xmlRequired:false},
                TransactionsPerPage:{name:"TransactionsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                ReturnedTransactionCountActual:{name:"ReturnedTransactionCountActual", type:"int", xmlRequired:false},
                Seller:{name:"Seller", type:"UserType", xmlRequired:false},
                TransactionArray:{name:"TransactionArray", type:"TransactionArrayType", xmlRequired:false},
                PayPalPreferred:{name:"PayPalPreferred", type:"boolean", xmlRequired:false}
            },
            ID:"GetSellerTransactionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetShippingDiscountProfilesRequestType",
            fields:{},
            ID:"GetShippingDiscountProfilesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetShippingDiscountProfilesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetShippingDiscountProfilesResponseType",
            fields:{},
            ID:"GetShippingDiscountProfilesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CurrencyID:{name:"CurrencyID", type:"CurrencyCodeType", xmlRequired:false},
                FlatShippingDiscount:{name:"FlatShippingDiscount", type:"FlatShippingDiscountType", xmlRequired:false},
                CalculatedShippingDiscount:{name:"CalculatedShippingDiscount", type:"CalculatedShippingDiscountType", 
                                            xmlRequired:false},
                PromotionalShippingDiscount:{name:"PromotionalShippingDiscount", type:"boolean", xmlRequired:false},
                CalculatedHandlingDiscount:{name:"CalculatedHandlingDiscount", type:"CalculatedHandlingDiscountType", 
                                            xmlRequired:false},
                PromotionalShippingDiscountDetails:{name:"PromotionalShippingDiscountDetails", 
                                                    type:"PromotionalShippingDiscountDetailsType",xmlRequired:false},
                ShippingInsurance:{name:"ShippingInsurance", type:"ShippingInsuranceType", xmlRequired:false},
                InternationalShippingInsurance:{name:"InternationalShippingInsurance", type:"ShippingInsuranceType", 
                                                xmlRequired:false},
                CombinedDuration:{name:"CombinedDuration", type:"CombinedPaymentPeriodCodeType", 
                                  xmlRequired:false}
            },
            ID:"GetShippingDiscountProfilesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreRequestType",
            fields:{},
            ID:"GetStoreRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryStructureOnly:{name:"CategoryStructureOnly", type:"boolean", xmlRequired:false},
                RootCategoryID:{name:"RootCategoryID", type:"long", xmlRequired:false},
                LevelLimit:{name:"LevelLimit", type:"int", xmlRequired:false}
            },
            ID:"GetStoreRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreResponseType",
            fields:{},
            ID:"GetStoreResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Store:{name:"Store", type:"StoreType", xmlRequired:false}
            },
            ID:"GetStoreResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreCategoryUpdateStatusRequestType",
            fields:{},
            ID:"GetStoreCategoryUpdateStatusRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                TaskID:{name:"TaskID", type:"long", xmlRequired:false}
            },
            ID:"GetStoreCategoryUpdateStatusRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreCategoryUpdateStatusResponseType",
            fields:{},
            ID:"GetStoreCategoryUpdateStatusResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Status:{name:"Status", type:"TaskStatusCodeType", xmlRequired:false}
            },
            ID:"GetStoreCategoryUpdateStatusResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreCustomPageRequestType",
            fields:{},
            ID:"GetStoreCustomPageRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PageID:{name:"PageID", type:"long", xmlRequired:false}
            },
            ID:"GetStoreCustomPageRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreCustomPageResponseType",
            fields:{},
            ID:"GetStoreCustomPageResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CustomPageArray:{name:"CustomPageArray", type:"StoreCustomPageArrayType", xmlRequired:false}
            },
            ID:"GetStoreCustomPageResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreOptionsRequestType",
            fields:{},
            ID:"GetStoreOptionsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetStoreOptionsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStoreOptionsResponseType",
            fields:{},
            ID:"GetStoreOptionsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BasicThemeArray:{name:"BasicThemeArray", type:"StoreThemeArrayType", xmlRequired:false},
                AdvancedThemeArray:{name:"AdvancedThemeArray", type:"StoreThemeArrayType", xmlRequired:false},
                LogoArray:{name:"LogoArray", type:"StoreLogoArrayType", xmlRequired:false},
                SubscriptionArray:{name:"SubscriptionArray", type:"StoreSubscriptionArrayType", xmlRequired:false},
                MaxCategories:{name:"MaxCategories", type:"int", xmlRequired:false},
                MaxCategoryLevels:{name:"MaxCategoryLevels", type:"int", xmlRequired:false}
            },
            ID:"GetStoreOptionsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStorePreferencesRequestType",
            fields:{},
            ID:"GetStorePreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetStorePreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetStorePreferencesResponseType",
            fields:{},
            ID:"GetStorePreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                StorePreferences:{name:"StorePreferences", type:"StorePreferencesType", xmlRequired:false}
            },
            ID:"GetStorePreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSuggestedCategoriesRequestType",
            fields:{},
            ID:"GetSuggestedCategoriesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Query:{name:"Query", type:"string", xmlRequired:false}
            },
            ID:"GetSuggestedCategoriesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetSuggestedCategoriesResponseType",
            fields:{},
            ID:"GetSuggestedCategoriesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                SuggestedCategoryArray:{name:"SuggestedCategoryArray", type:"SuggestedCategoryArrayType", 
                                        xmlRequired:false},
                CategoryCount:{name:"CategoryCount", type:"int", xmlRequired:false}
            },
            ID:"GetSuggestedCategoriesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetTaxTableRequestType",
            fields:{},
            ID:"GetTaxTableRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GetTaxTableRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetTaxTableResponseType",
            fields:{},
            ID:"GetTaxTableResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                LastUpdateTime:{name:"LastUpdateTime", type:"dateTime", xmlRequired:false},
                TaxTable:{name:"TaxTable", type:"TaxTableType", xmlRequired:false}
            },
            ID:"GetTaxTableResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserRequestType",
            fields:{},
            ID:"GetUserRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                UserID:{name:"UserID", type:"string", xmlRequired:false},
                IncludeExpressRequirements:{name:"IncludeExpressRequirements", type:"boolean", xmlRequired:false}
            },
            ID:"GetUserRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserResponseType",
            fields:{},
            ID:"GetUserResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                User:{name:"User", type:"UserType", xmlRequired:false}
            },
            ID:"GetUserResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserContactDetailsRequestType",
            fields:{},
            ID:"GetUserContactDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"string", xmlRequired:false},
                ContactID:{name:"ContactID", type:"string", xmlRequired:false},
                RequesterID:{name:"RequesterID", type:"string", xmlRequired:false}
            },
            ID:"GetUserContactDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserContactDetailsResponseType",
            fields:{},
            ID:"GetUserContactDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                UserID:{name:"UserID", type:"string", xmlRequired:false},
                ContactAddress:{name:"ContactAddress", type:"AddressType", xmlRequired:false},
                RegistrationDate:{name:"RegistrationDate", type:"dateTime", xmlRequired:false}
            },
            ID:"GetUserContactDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserDisputesRequestType",
            fields:{},
            ID:"GetUserDisputesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DisputeFilterType:{name:"DisputeFilterType", type:"DisputeFilterTypeCodeType", xmlRequired:false},
                DisputeSortType:{name:"DisputeSortType", type:"DisputeSortTypeCodeType", xmlRequired:false},
                ModTimeFrom:{name:"ModTimeFrom", type:"dateTime", xmlRequired:false},
                ModTimeTo:{name:"ModTimeTo", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetUserDisputesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserDisputesResponseType",
            fields:{},
            ID:"GetUserDisputesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                StartingDisputeID:{name:"StartingDisputeID", type:"DisputeIDType", xmlRequired:false},
                EndingDisputeID:{name:"EndingDisputeID", type:"DisputeIDType", xmlRequired:false},
                DisputeArray:{name:"DisputeArray", type:"DisputeArrayType", xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                DisputeFilterCount:{name:"DisputeFilterCount", type:"DisputeFilterCountType", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"GetUserDisputesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserPreferencesRequestType",
            fields:{},
            ID:"GetUserPreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ShowBidderNoticePreferences:{name:"ShowBidderNoticePreferences", type:"boolean", xmlRequired:true},
                ShowCombinedPaymentPreferences:{name:"ShowCombinedPaymentPreferences", type:"boolean", xmlRequired:true},
                ShowCrossPromotionPreferences:{name:"ShowCrossPromotionPreferences", type:"boolean", xmlRequired:true},
                ShowSellerPaymentPreferences:{name:"ShowSellerPaymentPreferences", type:"boolean", xmlRequired:true},
                ShowEndOfAuctionEmailPreferences:{name:"ShowEndOfAuctionEmailPreferences", type:"boolean", xmlRequired:false},
                ShowSellerFavoriteItemPreferences:{name:"ShowSellerFavoriteItemPreferences", type:"boolean", xmlRequired:false},
                ShowProStoresPreferences:{name:"ShowProStoresPreferences", type:"boolean", xmlRequired:false}
            },
            ID:"GetUserPreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetUserPreferencesResponseType",
            fields:{},
            ID:"GetUserPreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                BidderNoticePreferences:{name:"BidderNoticePreferences", type:"BidderNoticePreferencesType", 
                                         xmlRequired:false},
                CombinedPaymentPreferences:{name:"CombinedPaymentPreferences", type:"CombinedPaymentPreferencesType", 
                                            xmlRequired:false},
                CrossPromotionPreferences:{name:"CrossPromotionPreferences", type:"CrossPromotionPreferencesType", 
                                           xmlRequired:false},
                SellerPaymentPreferences:{name:"SellerPaymentPreferences", type:"SellerPaymentPreferencesType", 
                                          xmlRequired:false},
                SellerFavoriteItemPreferences:{name:"SellerFavoriteItemPreferences", type:"SellerFavoriteItemPreferencesType", 
                                               xmlRequired:false},
                EndOfAuctionEmailPreferences:{name:"EndOfAuctionEmailPreferences", type:"EndOfAuctionEmailPreferencesType", 
                                              xmlRequired:false},
                ExpressPreferences:{name:"ExpressPreferences", type:"ExpressPreferencesType", xmlRequired:false},
                ProStoresPreference:{name:"ProStoresPreference", type:"ProStoresCheckoutPreferenceType", 
                                     xmlRequired:false}
            },
            ID:"GetUserPreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetVeROReasonCodeDetailsRequestType",
            fields:{},
            ID:"GetVeROReasonCodeDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ReasonCodeID:{name:"ReasonCodeID", type:"long", xmlRequired:false},
                ReturnAllSites:{name:"ReturnAllSites", type:"boolean", xmlRequired:false}
            },
            ID:"GetVeROReasonCodeDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetVeROReasonCodeDetailsResponseType",
            fields:{},
            ID:"GetVeROReasonCodeDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                VeROReasonCodeDetails:{name:"VeROReasonCodeDetails", type:"VeROReasonCodeDetailsType", 
                                       xmlRequired:false}
            },
            ID:"GetVeROReasonCodeDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetVeROReportStatusRequestType",
            fields:{},
            ID:"GetVeROReportStatusRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                VeROReportPacketID:{name:"VeROReportPacketID", type:"long", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                IncludeReportedItemDetails:{name:"IncludeReportedItemDetails", type:"boolean", xmlRequired:false},
                TimeFrom:{name:"TimeFrom", type:"dateTime", xmlRequired:false},
                TimeTo:{name:"TimeTo", type:"dateTime", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetVeROReportStatusRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetVeROReportStatusResponseType",
            fields:{},
            ID:"GetVeROReportStatusResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                VeROReportPacketID:{name:"VeROReportPacketID", type:"long", xmlRequired:false},
                VeROReportPacketStatus:{name:"VeROReportPacketStatus", type:"VeROReportPacketStatusCodeType", 
                                        xmlRequired:false},
                ReportedItemDetails:{name:"ReportedItemDetails", type:"VeROReportedItemDetailsType", 
                                     xmlRequired:false}
            },
            ID:"GetVeROReportStatusResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetWantItNowPostRequestType",
            fields:{},
            ID:"GetWantItNowPostRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PostID:{name:"PostID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"GetWantItNowPostRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetWantItNowPostResponseType",
            fields:{},
            ID:"GetWantItNowPostResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                WantItNowPost:{name:"WantItNowPost", type:"WantItNowPostType", xmlRequired:false}
            },
            ID:"GetWantItNowPostResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetWantItNowSearchResultsRequestType",
            fields:{},
            ID:"GetWantItNowSearchResultsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Query:{name:"Query", type:"string", xmlRequired:false},
                SearchInDescription:{name:"SearchInDescription", type:"boolean", xmlRequired:false},
                SearchWorldwide:{name:"SearchWorldwide", type:"boolean", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"GetWantItNowSearchResultsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GetWantItNowSearchResultsResponseType",
            fields:{},
            ID:"GetWantItNowSearchResultsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                WantItNowPostArray:{name:"WantItNowPostArray", type:"WantItNowPostArrayType", xmlRequired:false},
                HasMoreItems:{name:"HasMoreItems", type:"boolean", xmlRequired:false},
                ItemsPerPage:{name:"ItemsPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"GetWantItNowSearchResultsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GeteBayDetailsRequestType",
            fields:{},
            ID:"GeteBayDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DetailName:{name:"DetailName", type:"DetailNameCodeType", xmlRequired:false}
            },
            ID:"GeteBayDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GeteBayDetailsResponseType",
            fields:{},
            ID:"GeteBayDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CountryDetails:{name:"CountryDetails", type:"CountryDetailsType", xmlRequired:false},
                CurrencyDetails:{name:"CurrencyDetails", type:"CurrencyDetailsType", xmlRequired:false},
                DispatchTimeMaxDetails:{name:"DispatchTimeMaxDetails", type:"DispatchTimeMaxDetailsType", 
                                        xmlRequired:false},
                PaymentOptionDetails:{name:"PaymentOptionDetails", type:"PaymentOptionDetailsType", xmlRequired:false},
                RegionDetails:{name:"RegionDetails", type:"RegionDetailsType", xmlRequired:false},
                ShippingLocationDetails:{name:"ShippingLocationDetails", type:"ShippingLocationDetailsType", 
                                         xmlRequired:false},
                ShippingServiceDetails:{name:"ShippingServiceDetails", type:"ShippingServiceDetailsType", 
                                        xmlRequired:false},
                SiteDetails:{name:"SiteDetails", type:"SiteDetailsType", xmlRequired:false},
                TaxJurisdiction:{name:"TaxJurisdiction", type:"TaxJurisdictionType", xmlRequired:false},
                URLDetails:{name:"URLDetails", type:"URLDetailsType", xmlRequired:false},
                TimeZoneDetails:{name:"TimeZoneDetails", type:"TimeZoneDetailsType", xmlRequired:false}
            },
            ID:"GeteBayDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GeteBayOfficialTimeRequestType",
            fields:{},
            ID:"GeteBayOfficialTimeRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{},
            ID:"GeteBayOfficialTimeRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"GeteBayOfficialTimeResponseType",
            fields:{},
            ID:"GeteBayOfficialTimeResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"GeteBayOfficialTimeResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"IssueRefundRequestType",
            fields:{},
            ID:"IssueRefundRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                RefundReason:{name:"RefundReason", type:"RefundReasonCodeType", xmlRequired:false},
                RefundType:{name:"RefundType", type:"RefundTypeCodeType", xmlRequired:false},
                RefundAmount:{name:"RefundAmount", type:"AmountType", xmlRequired:false},
                RefundMessage:{name:"RefundMessage", type:"string", xmlRequired:false}
            },
            ID:"IssueRefundRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"IssueRefundResponseType",
            fields:{},
            ID:"IssueRefundResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                RefundFromSeller:{name:"RefundFromSeller", type:"AmountType", xmlRequired:false},
                TotalRefundToBuyer:{name:"TotalRefundToBuyer", type:"AmountType", xmlRequired:false}
            },
            ID:"IssueRefundResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"LeaveFeedbackRequestType",
            fields:{},
            ID:"LeaveFeedbackRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                CommentText:{name:"CommentText", type:"string", xmlRequired:false},
                CommentType:{name:"CommentType", type:"CommentTypeCodeType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                TargetUser:{name:"TargetUser", type:"UserIDType", xmlRequired:false},
                SellerItemRatingDetailArray:{name:"SellerItemRatingDetailArray", type:"ItemRatingDetailArrayType", 
                                             xmlRequired:false}
            },
            ID:"LeaveFeedbackRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"LeaveFeedbackResponseType",
            fields:{},
            ID:"LeaveFeedbackResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                FeedbackID:{name:"FeedbackID", type:"string", xmlRequired:false}
            },
            ID:"LeaveFeedbackResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"PlaceOfferRequestType",
            fields:{},
            ID:"PlaceOfferRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Offer:{name:"Offer", type:"OfferType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                BlockOnWarning:{name:"BlockOnWarning", type:"boolean", xmlRequired:false}
            },
            ID:"PlaceOfferRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"PlaceOfferResponseType",
            fields:{},
            ID:"PlaceOfferResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                SellingStatus:{name:"SellingStatus", type:"SellingStatusType", xmlRequired:false}
            },
            ID:"PlaceOfferResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RelistItemRequestType",
            fields:{},
            ID:"RelistItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                DeletedField:{name:"DeletedField", type:"string", xmlRequired:false}
            },
            ID:"RelistItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RelistItemResponseType",
            fields:{},
            ID:"RelistItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"RelistItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RemoveFromWatchListRequestType",
            fields:{},
            ID:"RemoveFromWatchListRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                RemoveAllItems:{name:"RemoveAllItems", type:"boolean", xmlRequired:false}
            },
            ID:"RemoveFromWatchListRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RemoveFromWatchListResponseType",
            fields:{},
            ID:"RemoveFromWatchListResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                WatchListCount:{name:"WatchListCount", type:"int", xmlRequired:false},
                WatchListMaximum:{name:"WatchListMaximum", type:"int", xmlRequired:false}
            },
            ID:"RemoveFromWatchListResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToBestOfferRequestType",
            fields:{},
            ID:"RespondToBestOfferRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                BestOfferID:{name:"BestOfferID", type:"BestOfferIDType", xmlRequired:false},
                Action:{name:"Action", type:"BestOfferActionCodeType", xmlRequired:false},
                SellerResponse:{name:"SellerResponse", type:"string", xmlRequired:false},
                CounterOfferPrice:{name:"CounterOfferPrice", type:"AmountType", xmlRequired:false},
                CounterOfferQuantity:{name:"CounterOfferQuantity", type:"int", xmlRequired:false}
            },
            ID:"RespondToBestOfferRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToBestOfferResponseType",
            fields:{},
            ID:"RespondToBestOfferResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                RespondToBestOffer:{name:"RespondToBestOffer", type:"BestOfferArrayType", xmlRequired:false}
            },
            ID:"RespondToBestOfferResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToFeedbackRequestType",
            fields:{},
            ID:"RespondToFeedbackRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FeedbackID:{name:"FeedbackID", type:"string", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                TargetUserID:{name:"TargetUserID", type:"UserIDType", xmlRequired:false},
                ResponseType:{name:"ResponseType", type:"FeedbackResponseCodeType", xmlRequired:false},
                ResponseText:{name:"ResponseText", type:"string", xmlRequired:false}
            },
            ID:"RespondToFeedbackRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToFeedbackResponseType",
            fields:{},
            ID:"RespondToFeedbackResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"RespondToFeedbackResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToWantItNowPostRequestType",
            fields:{},
            ID:"RespondToWantItNowPostRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                PostID:{name:"PostID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"RespondToWantItNowPostRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"RespondToWantItNowPostResponseType",
            fields:{},
            ID:"RespondToWantItNowPostResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"RespondToWantItNowPostResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseCheckoutStatusRequestType",
            fields:{},
            ID:"ReviseCheckoutStatusRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                OrderID:{name:"OrderID", type:"string", xmlRequired:false},
                AmountPaid:{name:"AmountPaid", type:"AmountType", xmlRequired:false},
                PaymentMethodUsed:{name:"PaymentMethodUsed", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                CheckoutStatus:{name:"CheckoutStatus", type:"CompleteStatusCodeType", xmlRequired:false},
                ShippingService:{name:"ShippingService", type:"token", xmlRequired:false},
                ShippingIncludedInTax:{name:"ShippingIncludedInTax", type:"boolean", xmlRequired:false},
                CheckoutMethod:{name:"CheckoutMethod", type:"CheckoutMethodCodeType", xmlRequired:false},
                InsuranceType:{name:"InsuranceType", type:"InsuranceSelectedCodeType", xmlRequired:false},
                PaymentStatus:{name:"PaymentStatus", type:"RCSPaymentStatusCodeType", xmlRequired:false},
                AdjustmentAmount:{name:"AdjustmentAmount", type:"AmountType", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false},
                BuyerID:{name:"BuyerID", type:"string", xmlRequired:false},
                ShippingInsuranceCost:{name:"ShippingInsuranceCost", type:"AmountType", xmlRequired:false},
                SalesTax:{name:"SalesTax", type:"AmountType", xmlRequired:false},
                ShippingCost:{name:"ShippingCost", type:"AmountType", xmlRequired:false},
                EncryptedID:{name:"EncryptedID", type:"string", xmlRequired:false},
                ExternalTransaction:{name:"ExternalTransaction", type:"ExternalTransactionType", xmlRequired:false},
                MultipleSellerPaymentID:{name:"MultipleSellerPaymentID", type:"string", xmlRequired:false}
            },
            ID:"ReviseCheckoutStatusRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseCheckoutStatusResponseType",
            fields:{},
            ID:"ReviseCheckoutStatusResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"ReviseCheckoutStatusResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseItemRequestType",
            fields:{},
            ID:"ReviseItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                DeletedField:{name:"DeletedField", type:"string", xmlRequired:false}
            },
            ID:"ReviseItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseItemResponseType",
            fields:{},
            ID:"ReviseItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"ReviseItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseLiveAuctionItemRequestType",
            fields:{},
            ID:"ReviseLiveAuctionItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                DeletedField:{name:"DeletedField", type:"string", xmlRequired:false}
            },
            ID:"ReviseLiveAuctionItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseLiveAuctionItemResponseType",
            fields:{},
            ID:"ReviseLiveAuctionItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"ReviseLiveAuctionItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseMyMessagesRequestType",
            fields:{},
            ID:"ReviseMyMessagesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                MessageIDs:{name:"MessageIDs", type:"MyMessagesMessageIDArrayType", xmlRequired:false},
                AlertIDs:{name:"AlertIDs", type:"MyMessagesAlertIDArrayType", xmlRequired:false},
                Read:{name:"Read", type:"boolean", xmlRequired:false},
                Flagged:{name:"Flagged", type:"boolean", xmlRequired:false},
                FolderID:{name:"FolderID", type:"long", xmlRequired:false}
            },
            ID:"ReviseMyMessagesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseMyMessagesResponseType",
            fields:{},
            ID:"ReviseMyMessagesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"ReviseMyMessagesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseMyMessagesFoldersRequestType",
            fields:{},
            ID:"ReviseMyMessagesFoldersRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Operation:{name:"Operation", type:"MyMessagesFolderOperationCodeType", xmlRequired:false},
                FolderID:{name:"FolderID", type:"long", xmlRequired:false},
                FolderName:{name:"FolderName", type:"string", xmlRequired:false}
            },
            ID:"ReviseMyMessagesFoldersRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ReviseMyMessagesFoldersResponseType",
            fields:{},
            ID:"ReviseMyMessagesFoldersResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"ReviseMyMessagesFoldersResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SellerReverseDisputeRequestType",
            fields:{},
            ID:"SellerReverseDisputeRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                DisputeID:{name:"DisputeID", type:"DisputeIDType", xmlRequired:false},
                DisputeResolutionReason:{name:"DisputeResolutionReason", type:"DisputeResolutionReasonCodeType", 
                                         xmlRequired:false}
            },
            ID:"SellerReverseDisputeRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SellerReverseDisputeResponseType",
            fields:{},
            ID:"SellerReverseDisputeResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SellerReverseDisputeResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SendInvoiceRequestType",
            fields:{},
            ID:"SendInvoiceRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                OrderID:{name:"OrderID", type:"OrderIDType", xmlRequired:false},
                InternationalShippingServiceOptions:{name:"InternationalShippingServiceOptions", 
                                                     type:"InternationalShippingServiceOptionsType",xmlRequired:false},
                ShippingServiceOptions:{name:"ShippingServiceOptions", type:"ShippingServiceOptionsType", 
                                        xmlRequired:false},
                SalesTax:{name:"SalesTax", type:"SalesTaxType", xmlRequired:false},
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false},
                InsuranceFee:{name:"InsuranceFee", type:"AmountType", xmlRequired:false},
                PaymentMethods:{name:"PaymentMethods", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                PayPalEmailAddress:{name:"PayPalEmailAddress", type:"string", xmlRequired:false},
                CheckoutInstructions:{name:"CheckoutInstructions", type:"string", xmlRequired:false},
                EmailCopyToSeller:{name:"EmailCopyToSeller", type:"boolean", xmlRequired:false}
            },
            ID:"SendInvoiceRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SendInvoiceResponseType",
            fields:{},
            ID:"SendInvoiceResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SendInvoiceResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetCartRequestType",
            fields:{},
            ID:"SetCartRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AffiliateTrackingDetails:{name:"AffiliateTrackingDetails", type:"AffiliateTrackingDetailsType", 
                                          xmlRequired:false},
                CartID:{name:"CartID", type:"long", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false},
                CheckoutCompleteRedirect:{name:"CheckoutCompleteRedirect", type:"CheckoutCompleteRedirectType", 
                                          xmlRequired:false},
                CartItemArray:{name:"CartItemArray", type:"CartItemArrayType", xmlRequired:false}
            },
            ID:"SetCartRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetCartResponseType",
            fields:{},
            ID:"SetCartResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Cart:{name:"Cart", type:"CartType", xmlRequired:false}
            },
            ID:"SetCartResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetMessagePreferencesRequestType",
            fields:{},
            ID:"SetMessagePreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ASQPreferences:{name:"ASQPreferences", type:"ASQPreferencesType", xmlRequired:false}
            },
            ID:"SetMessagePreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetMessagePreferencesResponseType",
            fields:{},
            ID:"SetMessagePreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetMessagePreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetNotificationPreferencesRequestType",
            fields:{},
            ID:"SetNotificationPreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ApplicationDeliveryPreferences:{name:"ApplicationDeliveryPreferences", type:"ApplicationDeliveryPreferencesType", 
                                                xmlRequired:false},
                UserDeliveryPreferenceArray:{name:"UserDeliveryPreferenceArray", type:"NotificationEnableArrayType", 
                                             xmlRequired:false},
                UserData:{name:"UserData", type:"NotificationUserDataType", xmlRequired:false},
                EventProperty:{name:"EventProperty", type:"NotificationEventPropertyType", xmlRequired:false}
            },
            ID:"SetNotificationPreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetNotificationPreferencesResponseType",
            fields:{},
            ID:"SetNotificationPreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetNotificationPreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPictureManagerDetailsRequestType",
            fields:{},
            ID:"SetPictureManagerDetailsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PictureManagerDetails:{name:"PictureManagerDetails", type:"PictureManagerDetailsType", 
                                       xmlRequired:false},
                Action:{name:"Action", type:"PictureManagerActionCodeType", xmlRequired:false}
            },
            ID:"SetPictureManagerDetailsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPictureManagerDetailsResponseType",
            fields:{},
            ID:"SetPictureManagerDetailsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetPictureManagerDetailsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionRulesRequestType",
            fields:{},
            ID:"SetPromotionRulesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                OperationType:{name:"OperationType", type:"OperationTypeCodeType", xmlRequired:false},
                PromotionRuleArray:{name:"PromotionRuleArray", type:"PromotionRuleArrayType", xmlRequired:false}
            },
            ID:"SetPromotionRulesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionRulesResponseType",
            fields:{},
            ID:"SetPromotionRulesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetPromotionRulesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionalSaleRequestType",
            fields:{},
            ID:"SetPromotionalSaleRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Action:{name:"Action", type:"ModifyActionCodeType", xmlRequired:false},
                PromotionalSaleDetails:{name:"PromotionalSaleDetails", type:"PromotionalSaleType", xmlRequired:false}
            },
            ID:"SetPromotionalSaleRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionalSaleResponseType",
            fields:{},
            ID:"SetPromotionalSaleResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Status:{name:"Status", type:"PromotionalSaleStatusCodeType", xmlRequired:false},
                PromotionalSaleID:{name:"PromotionalSaleID", type:"long", xmlRequired:false}
            },
            ID:"SetPromotionalSaleResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionalSaleListingsRequestType",
            fields:{},
            ID:"SetPromotionalSaleListingsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                PromotionalSaleID:{name:"PromotionalSaleID", type:"long", xmlRequired:false},
                Action:{name:"Action", type:"ModifyActionCodeType", xmlRequired:false},
                PromotionalSaleItemIDArray:{name:"PromotionalSaleItemIDArray", type:"ItemIDArrayType", xmlRequired:false},
                StoreCategoryID:{name:"StoreCategoryID", type:"long", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"long", xmlRequired:false},
                AllFixedPriceItems:{name:"AllFixedPriceItems", type:"boolean", xmlRequired:false},
                AllStoreInventoryItems:{name:"AllStoreInventoryItems", type:"boolean", xmlRequired:false}
            },
            ID:"SetPromotionalSaleListingsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetPromotionalSaleListingsResponseType",
            fields:{},
            ID:"SetPromotionalSaleListingsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                Status:{name:"Status", type:"PromotionalSaleStatusCodeType", xmlRequired:false}
            },
            ID:"SetPromotionalSaleListingsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetReturnURLRequestType",
            fields:{},
            ID:"SetReturnURLRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                AuthenticationEntry:{name:"AuthenticationEntry", type:"AuthenticationEntryType", xmlRequired:false},
                ApplicationDisplayName:{name:"ApplicationDisplayName", type:"string", xmlRequired:false},
                Action:{name:"Action", type:"ModifyActionCodeType", xmlRequired:false}
            },
            ID:"SetReturnURLRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetReturnURLResponseType",
            fields:{},
            ID:"SetReturnURLResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetReturnURLResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetShippingDiscountProfilesRequestType",
            fields:{},
            ID:"SetShippingDiscountProfilesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CurrencyID:{name:"CurrencyID", type:"CurrencyCodeType", xmlRequired:false},
                CombinedDuration:{name:"CombinedDuration", type:"CombinedPaymentPeriodCodeType", 
                                  xmlRequired:false},
                ModifyActionCode:{name:"ModifyActionCode", type:"ModifyActionCodeType", xmlRequired:false},
                FlatShippingDiscount:{name:"FlatShippingDiscount", type:"FlatShippingDiscountType", xmlRequired:false},
                CalculatedShippingDiscount:{name:"CalculatedShippingDiscount", type:"CalculatedShippingDiscountType", 
                                            xmlRequired:false},
                CalculatedHandlingDiscount:{name:"CalculatedHandlingDiscount", type:"CalculatedHandlingDiscountType", 
                                            xmlRequired:false},
                PromotionalShippingDiscountDetails:{name:"PromotionalShippingDiscountDetails", 
                                                    type:"PromotionalShippingDiscountDetailsType",xmlRequired:false},
                ShippingInsurance:{name:"ShippingInsurance", type:"ShippingInsuranceType", xmlRequired:false},
                InternationalShippingInsurance:{name:"InternationalShippingInsurance", type:"ShippingInsuranceType", 
                                                xmlRequired:false}
            },
            ID:"SetShippingDiscountProfilesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetShippingDiscountProfilesResponseType",
            fields:{},
            ID:"SetShippingDiscountProfilesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetShippingDiscountProfilesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreRequestType",
            fields:{},
            ID:"SetStoreRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Store:{name:"Store", type:"StoreType", xmlRequired:false}
            },
            ID:"SetStoreRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreResponseType",
            fields:{},
            ID:"SetStoreResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetStoreResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreCategoriesRequestType",
            fields:{},
            ID:"SetStoreCategoriesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Action:{name:"Action", type:"StoreCategoryUpdateActionCodeType", xmlRequired:false},
                ItemDestinationCategoryID:{name:"ItemDestinationCategoryID", type:"long", xmlRequired:false},
                DestinationParentCategoryID:{name:"DestinationParentCategoryID", type:"long", xmlRequired:false},
                StoreCategories:{name:"StoreCategories", type:"StoreCustomCategoryArrayType", xmlRequired:false}
            },
            ID:"SetStoreCategoriesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreCategoriesResponseType",
            fields:{},
            ID:"SetStoreCategoriesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                TaskID:{name:"TaskID", type:"long", xmlRequired:false},
                Status:{name:"Status", type:"TaskStatusCodeType", xmlRequired:false}
            },
            ID:"SetStoreCategoriesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreCustomPageRequestType",
            fields:{},
            ID:"SetStoreCustomPageRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                CustomPage:{name:"CustomPage", type:"StoreCustomPageType", xmlRequired:false}
            },
            ID:"SetStoreCustomPageRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStoreCustomPageResponseType",
            fields:{},
            ID:"SetStoreCustomPageResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                CustomPage:{name:"CustomPage", type:"StoreCustomPageType", xmlRequired:false}
            },
            ID:"SetStoreCustomPageResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStorePreferencesRequestType",
            fields:{},
            ID:"SetStorePreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                StorePreferences:{name:"StorePreferences", type:"StorePreferencesType", xmlRequired:false}
            },
            ID:"SetStorePreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetStorePreferencesResponseType",
            fields:{},
            ID:"SetStorePreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetStorePreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetTaxTableRequestType",
            fields:{},
            ID:"SetTaxTableRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                TaxTable:{name:"TaxTable", type:"TaxTableType", xmlRequired:false}
            },
            ID:"SetTaxTableRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetTaxTableResponseType",
            fields:{},
            ID:"SetTaxTableResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetTaxTableResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetUserNotesRequestType",
            fields:{},
            ID:"SetUserNotesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Action:{name:"Action", type:"SetUserNotesActionCodeType", xmlRequired:false},
                NoteText:{name:"NoteText", type:"string", xmlRequired:false}
            },
            ID:"SetUserNotesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetUserNotesResponseType",
            fields:{},
            ID:"SetUserNotesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetUserNotesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetUserPreferencesRequestType",
            fields:{},
            ID:"SetUserPreferencesRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                BidderNoticePreferences:{name:"BidderNoticePreferences", type:"BidderNoticePreferencesType", 
                                         xmlRequired:false},
                CombinedPaymentPreferences:{name:"CombinedPaymentPreferences", type:"CombinedPaymentPreferencesType", 
                                            xmlRequired:false},
                CrossPromotionPreferences:{name:"CrossPromotionPreferences", type:"CrossPromotionPreferencesType", 
                                           xmlRequired:false},
                SellerPaymentPreferences:{name:"SellerPaymentPreferences", type:"SellerPaymentPreferencesType", 
                                          xmlRequired:false},
                SellerFavoriteItemPreferences:{name:"SellerFavoriteItemPreferences", type:"SellerFavoriteItemPreferencesType", 
                                               xmlRequired:false},
                EndOfAuctionEmailPreferences:{name:"EndOfAuctionEmailPreferences", type:"EndOfAuctionEmailPreferencesType", 
                                              xmlRequired:false},
                ExpressPreferences:{name:"ExpressPreferences", type:"ExpressPreferencesType", xmlRequired:false}
            },
            ID:"SetUserPreferencesRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"SetUserPreferencesResponseType",
            fields:{},
            ID:"SetUserPreferencesResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"SetUserPreferencesResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ValidateChallengeInputRequestType",
            fields:{},
            ID:"ValidateChallengeInputRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                ChallengeToken:{name:"ChallengeToken", type:"string", xmlRequired:false},
                UserInput:{name:"UserInput", type:"string", xmlRequired:false},
                KeepTokenValid:{name:"KeepTokenValid", type:"boolean", xmlRequired:false}
            },
            ID:"ValidateChallengeInputRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ValidateChallengeInputResponseType",
            fields:{},
            ID:"ValidateChallengeInputResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ValidToken:{name:"ValidToken", type:"boolean", xmlRequired:false}
            },
            ID:"ValidateChallengeInputResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ValidateTestUserRegistrationRequestType",
            fields:{},
            ID:"ValidateTestUserRegistrationRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                FeedbackScore:{name:"FeedbackScore", type:"int", xmlRequired:false},
                RegistrationDate:{name:"RegistrationDate", type:"dateTime", xmlRequired:false},
                SubscribeSA:{name:"SubscribeSA", type:"boolean", xmlRequired:false},
                SubscribeSAPro:{name:"SubscribeSAPro", type:"boolean", xmlRequired:false},
                SubscribeSM:{name:"SubscribeSM", type:"boolean", xmlRequired:false},
                SubscribeSMPro:{name:"SubscribeSMPro", type:"boolean", xmlRequired:false}
            },
            ID:"ValidateTestUserRegistrationRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"ValidateTestUserRegistrationResponseType",
            fields:{},
            ID:"ValidateTestUserRegistrationResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{},
            ID:"ValidateTestUserRegistrationResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VeROReportItemsRequestType",
            fields:{},
            ID:"VeROReportItemsRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                RightsOwnerID:{name:"RightsOwnerID", type:"UserIDType", xmlRequired:false},
                ReportItems:{name:"ReportItems", type:"VeROReportItemsType", xmlRequired:false}
            },
            ID:"VeROReportItemsRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VeROReportItemsResponseType",
            fields:{},
            ID:"VeROReportItemsResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                VeROReportPacketID:{name:"VeROReportPacketID", type:"long", xmlRequired:false},
                VeROReportPacketStatus:{name:"VeROReportPacketStatus", type:"VeROReportPacketStatusCodeType", 
                                        xmlRequired:false}
            },
            ID:"VeROReportItemsResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VerifyAddItemRequestType",
            fields:{},
            ID:"VerifyAddItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                IncludeExpressRequirements:{name:"IncludeExpressRequirements", type:"boolean", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false}
            },
            ID:"VerifyAddItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VerifyAddItemResponseType",
            fields:{},
            ID:"VerifyAddItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Fees:{name:"Fees", type:"FeesType", xmlRequired:false},
                ExpressListing:{name:"ExpressListing", type:"boolean", xmlRequired:false},
                ExpressItemRequirements:{name:"ExpressItemRequirements", type:"ExpressItemRequirementsType", 
                                         xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Category2ID:{name:"Category2ID", type:"string", xmlRequired:false}
            },
            ID:"VerifyAddItemResponseType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VerifyAddSecondChanceItemRequestType",
            fields:{},
            ID:"VerifyAddSecondChanceItemRequest"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractRequestType",
            fields:{
                RecipientBidderUserID:{name:"RecipientBidderUserID", type:"UserIDType", xmlRequired:false},
                BuyItNowPrice:{name:"BuyItNowPrice", type:"AmountType", xmlRequired:false},
                Duration:{name:"Duration", type:"SecondChanceOfferDurationCodeType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                SellerMessage:{name:"SellerMessage", type:"string", xmlRequired:false}
            },
            ID:"VerifyAddSecondChanceItemRequestType"
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"VerifyAddSecondChanceItemResponseType",
            fields:{},
            ID:"VerifyAddSecondChanceItemResponse"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"VerifyAddSecondChanceItemResponseType"
        })
,
        isc.XSComplexType.create({
            xmlAbstract:"true",
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DetailLevel:{name:"DetailLevel", type:"DetailLevelCodeType", xmlRequired:false},
                ErrorLanguage:{name:"ErrorLanguage", type:"string", xmlRequired:false},
                MessageID:{name:"MessageID", type:"string", xmlRequired:false},
                Version:{name:"Version", type:"string", xmlRequired:false},
                ErrorHandling:{name:"ErrorHandling", type:"ErrorHandlingCodeType", xmlRequired:false},
                InvocationID:{name:"InvocationID", type:"UUIDType", xmlRequired:false},
                WarningLevel:{name:"WarningLevel", type:"WarningLevelCodeType", xmlRequired:false}
            },
            ID:"AbstractRequestType"
        })
,
        isc.XSComplexType.create({
            xmlAbstract:"true",
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Timestamp:{name:"Timestamp", type:"dateTime", xmlRequired:false},
                Ack:{name:"Ack", type:"AckCodeType", xmlRequired:false},
                CorrelationID:{name:"CorrelationID", type:"string", xmlRequired:false},
                Errors:{name:"Errors", type:"ErrorType", xmlRequired:false},
                Message:{name:"Message", type:"string", xmlRequired:false},
                Version:{name:"Version", type:"string", xmlRequired:false},
                Build:{name:"Build", type:"string", xmlRequired:false},
                NotificationEventName:{name:"NotificationEventName", type:"string", xmlRequired:false},
                DuplicateInvocationDetails:{name:"DuplicateInvocationDetails", type:"DuplicateInvocationDetailsType", 
                                            xmlRequired:false},
                RecipientUserID:{name:"RecipientUserID", type:"string", xmlRequired:false},
                EIASToken:{name:"EIASToken", type:"string", xmlRequired:false},
                NotificationSignature:{name:"NotificationSignature", type:"string", xmlRequired:false},
                HardExpirationWarning:{name:"HardExpirationWarning", type:"string", xmlRequired:false}
            },
            ID:"AbstractResponseType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AckCodeType",
            valueMap:["Success", "Failure", "Warning", "PartialFailure", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BuyerPaymentMethodCodeType",
            valueMap:["None", "MOCC", "AmEx", "PaymentSeeDescription", "CCAccepted", "PersonalCheck", "COD", 
                      "VisaMC","PaisaPayAccepted", "Other", "PayPal", "Discover", "CashOnPickup", 
                      "MoneyXferAccepted","MoneyXferAcceptedInCheckout", "OtherOnlinePayments", "Escrow", 
                      "PrePayDelivery","CODPrePayDelivery", "PostalTransfer", "CustomCode", "LoanCheck", 
                      "CashInPerson","ELV"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                eBayAuthToken:{name:"eBayAuthToken", type:"string", xmlRequired:false},
                HardExpirationWarning:{name:"HardExpirationWarning", type:"string", xmlRequired:false},
                Credentials:{name:"Credentials", type:"UserIdPasswordType", xmlRequired:false},
                NotificationSignature:{name:"NotificationSignature", type:"string", xmlRequired:false}
            },
            ID:"CustomSecurityHeaderType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DetailLevelCodeType",
            valueMap:["ReturnAll", "ItemReturnDescription", "ItemReturnAttributes", "ItemReturnCategories", 
                      "ReturnSummary","ReturnHeaders", "ReturnMessages"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeActivityCodeType",
            valueMap:["SellerAddInformation", "SellerCompletedTransaction", "CameToAgreementNeedFVFCredit", 
                      "SellerEndCommunication","MutualAgreementOrNoBuyerResponse", "SellerOffersRefund", "SellerShippedItem", 
                      "SellerComment","SellerPaymentNotReceived", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeCreditEligibilityCodeType",
            valueMap:["InEligible", "Eligible", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeExplanationCodeType",
            valueMap:["BuyerHasNotResponded", "BuyerRefusedToPay", "BuyerNotClearedToPay", 
                      "BuyerReturnedItemForRefund","UnableToResolveTerms", "BuyerNoLongerWantsItem", "BuyerPurchasingMistake", 
                      "ShipCountryNotSupported","ShippingAddressNotConfirmed", "PaymentMethodNotSupported", 
                      "BuyerNoLongerRegistered","OtherExplanation", "Unspecified", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisputeFilterType:{name:"DisputeFilterType", type:"DisputeFilterTypeCodeType", xmlRequired:false},
                TotalAvailable:{name:"TotalAvailable", type:"int", xmlRequired:false}
            },
            ID:"DisputeFilterCountType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeFilterTypeCodeType",
            valueMap:["AllInvolvedDisputes", "DisputesAwaitingMyResponse", 
                      "DisputesAwaitingOtherPartyResponse","AllInvolvedClosedDisputes", "EligibleForCredit", "UnpaidItemDisputes", 
                      "ItemNotReceivedDisputes","CustomCode"]
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"DisputeIDType"})
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeMessageSourceCodeType",
            valueMap:["Buyer", "Seller", "eBay", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MessageID:{name:"MessageID", type:"int", xmlRequired:false},
                MessageSource:{name:"MessageSource", type:"DisputeMessageSourceCodeType", xmlRequired:false},
                MessageCreationTime:{name:"MessageCreationTime", type:"dateTime", xmlRequired:false},
                MessageText:{name:"MessageText", type:"string", xmlRequired:false}
            },
            ID:"DisputeMessageType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeReasonCodeType",
            valueMap:["BuyerHasNotPaid", "TransactionMutuallyCanceled", "ItemNotReceived", 
                      "SignificantlyNotAsDescribed","NoRefund", "ReturnPolicyUnpaidItem", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeRecordTypeCodeType",
            valueMap:["UnpaidItem", "ItemNotReceived", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeResolutionReasonCodeType",
            valueMap:["Unresolved", "ProofOfPayment", "ComputerTechnicalProblem", "NoContact", 
                      "FamilyEmergency","ProofGivenInFeedback", "FirstInfraction", "CameToAgreement", "ItemReturned", 
                      "BuyerPaidAuctionFees","SellerReceivedPayment", "OtherResolution", "ClaimPaid", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeResolutionRecordTypeCodeType",
            valueMap:["StrikeBuyer", "SuspendBuyer", "FVFCredit", "InsertionFeeCredit", "AppealBuyerStrike", 
                      "UnsuspendBuyer","ReverseFVFCredit", "ReverseInsertionFeeCredit", "GenerateCSTicketForSuspend", 
                      "FVFCreditNotGranted","ItemNotReceivedClaimFiled", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisputeResolutionRecordType:{name:"DisputeResolutionRecordType", type:"DisputeResolutionRecordTypeCodeType", 
                                             xmlRequired:false},
                DisputeResolutionReason:{name:"DisputeResolutionReason", type:"DisputeResolutionReasonCodeType", 
                                         xmlRequired:false},
                ResolutionTime:{name:"ResolutionTime", type:"dateTime", xmlRequired:false}
            },
            ID:"DisputeResolutionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeSortTypeCodeType",
            valueMap:["None", "DisputeCreatedTimeAscending", "DisputeCreatedTimeDescending", 
                      "DisputeStatusAscending","DisputeStatusDescending", "DisputeCreditEligibilityAscending", 
                      "DisputeCreditEligibilityDescending","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeStateCodeType",
            valueMap:["Locked", "Closed", "BuyerFirstResponsePayOption", "BuyerFirstResponseNoPayOption", 
                      "BuyerFirstResponsePayOptionLateResponse","BuyerFirstResponseNoPayOptionLateResponse", "MutualCommunicationPayOption", 
                      "MutualCommunicationNoPayOption","PendingResolve", "MutualWithdrawalAgreement", 
                      "MutualWithdrawalAgreementLate","NotReceivedNoSellerResponse", "NotAsDescribedNoSellerResponse", 
                      "NotReceivedMutualCommunication","NotAsDescribedMutualCommunication", "MutualAgreementOrBuyerReturningItem", 
                      "ClaimOpened","NoDocumentation", "ClaimClosed", "ClaimDenied", "ClaimPending", 
                      "ClaimPaymentPending","ClaimPaid", "ClaimResolved", "ClaimSubmitted", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisputeStatusCodeType",
            valueMap:["Closed", "WaitingForSellerResponse", "WaitingForBuyerResponse", 
                      "ClosedFVFCreditStrike","ClosedNoFVFCreditStrike", "ClosedFVFCreditNoStrike", 
                      "ClosedNoFVFCreditNoStrike","StrikeAppealedAfterClosing", "FVFCreditReversedAfterClosing", 
                      "StrikeAppealedAndFVFCreditReversed","ClaimOpened", "NoDocumentation", "ClaimClosed", "ClaimDenied", 
                      "ClaimInProcess","ClaimApproved", "ClaimPaid", "ClaimResolved", "ClaimSubmitted", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DuplicateInvocationID:{name:"DuplicateInvocationID", type:"UUIDType", xmlRequired:false},
                Status:{name:"Status", type:"InvocationStatusType", xmlRequired:false},
                InvocationTrackingID:{name:"InvocationTrackingID", type:"string", xmlRequired:false}
            },
            ID:"DuplicateInvocationDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ErrorClassificationCodeType",
            valueMap:["RequestError", "SystemError", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ErrorHandlingCodeType",
            valueMap:["Legacy", "BestEffort", "AllOrNothing", "FailOnError"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ParamID:{name:"ParamID", type:"string", xmlAttribute:true},
                Value:{name:"Value", type:"string", xmlRequired:false}
            },
            ID:"ErrorParameterType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ShortMessage:{name:"ShortMessage", type:"string", xmlRequired:false},
                LongMessage:{name:"LongMessage", type:"string", xmlRequired:false},
                ErrorCode:{name:"ErrorCode", type:"token", xmlRequired:false},
                UserDisplayHint:{name:"UserDisplayHint", type:"boolean", xmlRequired:false},
                SeverityCode:{name:"SeverityCode", type:"SeverityCodeType", xmlRequired:false},
                ErrorParameters:{name:"ErrorParameters", type:"ErrorParameterType", xmlRequired:false},
                ErrorClassification:{name:"ErrorClassification", type:"ErrorClassificationCodeType", 
                                     xmlRequired:false}
            },
            ID:"ErrorType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ErrorCode:{name:"ErrorCode", type:"string", xmlRequired:false},
                Severity:{name:"Severity", type:"string", xmlRequired:false},
                DetailedMessage:{name:"DetailedMessage", type:"string", xmlRequired:false}
            },
            ID:"FaultDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"InvocationStatusType",
            valueMap:["InProgress", "Success", "Failure", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                unit:{name:"unit", type:"token", xmlAttribute:true},
                measurementSystem:{name:"measurementSystem", type:"MeasurementSystemCodeType", xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"decimal", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"MeasureType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MeasurementSystemCodeType",
            valueMap:["English", "Metric"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EntriesPerPage:{name:"EntriesPerPage", type:"int", xmlRequired:false},
                PageNumber:{name:"PageNumber", type:"int", xmlRequired:false}
            },
            ID:"PaginationType"
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                unit:{name:"unit", type:"token", xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"decimal", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"QuantityType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SeverityCodeType",
            valueMap:["Warning", "Error", "CustomCode"]
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"UUIDType"})
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AppId:{name:"AppId", type:"string", xmlRequired:false},
                DevId:{name:"DevId", type:"string", xmlRequired:false},
                AuthCert:{name:"AuthCert", type:"string", xmlRequired:false},
                Username:{name:"Username", type:"string", xmlRequired:false},
                Password:{name:"Password", type:"string", xmlRequired:false}
            },
            ID:"UserIdPasswordType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"WarningLevelCodeType",
            valueMap:["Low", "High"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Username:{name:"Username", type:"string", xmlRequired:false},
                Password:{name:"Password", type:"string", xmlRequired:false},
                eBayAuthToken:{name:"eBayAuthToken", type:"string", xmlRequired:false}
            },
            ID:"XMLRequesterCredentialsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ResetDefaultSubjects:{name:"ResetDefaultSubjects", type:"boolean", xmlRequired:false},
                Subject:{name:"Subject", type:"string", xmlRequired:false}
            },
            ID:"ASQPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccessRuleCurrentStatusCodeType",
            valueMap:["NotSet", "HourlyLimitExceeded", "DailyLimitExceeded", "PeriodicLimitExceeded", 
                      "HourlySoftLimitExceeded","DailySoftLimitExceeded", "PeriodicSoftLimitExceeded", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccessRuleStatusCodeType",
            valueMap:["RuleOff", "RuleOn", "ApplicationBlocked", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccountDetailEntryCodeType",
            valueMap:["Unknown", "FeeInsertion", "FeeBold", "FeeFeatured", "FeeCategoryFeatured", 
                      "FeeFinalValue","PaymentCheck", "PaymentCC", "CreditCourtesy", "CreditNoSale", 
                      "CreditPartialSale","RefundCC", "RefundCheck", "FinanceCharge", "AWDebit", "AWCredit", "AWMemo", 
                      "CreditDuplicateListing","FeePartialSale", "PaymentElectronicTransferReversal", "PaymentCCOnce", 
                      "FeeReturnedCheck","FeeRedepositCheck", "PaymentCash", "CreditInsertion", "CreditBold", 
                      "CreditFeatured","CreditCategoryFeatured", "CreditFinalValue", "FeeNSFCheck", 
                      "FeeReturnCheckClose","Memo", "PaymentMoneyOrder", "CreditCardOnFile", "CreditCardNotOnFile", 
                      "Invoiced","InvoicedCreditCard", "CreditTransferFrom", "DebitTransferTo", 
                      "InvoiceCreditBalance","eBayDebit", "eBayCredit", "PromotionalCredit", "CCNotOnFilePerCustReq", 
                      "CreditInsertionFee","CCPaymentRejected", "FeeGiftIcon", "CreditGiftIcon", "FeeGallery", 
                      "FeeFeaturedGallery","CreditGallery", "CreditFeaturedGallery", "ItemMoveFee", "OutageCredit", 
                      "CreditPSA","CreditPCGS", "FeeReserve", "CreditReserve", "eBayVISACredit", 
                      "BBAdminCredit","BBAdminDebit", "ReferrerCredit", "ReferrerDebit", "SwitchCurrency", 
                      "PaymentGiftCertificate","PaymentWireTransfer", "PaymentHomeBanking", "PaymentElectronicTransfer", 
                      "PaymentAdjustmentCredit","PaymentAdjustmentDebit", "Chargeoff", "ChargeoffRecovery", 
                      "ChargeoffBankruptcy","ChargeoffSuspended", "ChargeoffDeceased", "ChargeoffOther", "ChargeoffWacko", 
                      "FinanceChargeReversal","FVFCreditReversal", "ForeignFundsConvert", "ForeignFundsCheckReversal", 
                      "EOMRestriction","AllFeesCredit", "SetOnHold", "RevertUserState", "DirectDebitOnFile", 
                      "DirectDebitNotOnFile","PaymentDirectDebit", "DirectDebitReversal", "DirectDebitReturnedItem", 
                      "FeeHighlight","CreditHighlight", "BulkUserSuspension", "FeeRealEstate30DaysListing", 
                      "CreditRealEstate30DaysListing","TradingLimitOverrideOn", "TradingLimitOverrideOff", "EquifaxRealtimeFee", 
                      "CreditEquifaxRealtimeFee","PaymentEquifaxDebit", "PaymentEquifaxCredit", "Merged", "AutoTraderOn", 
                      "AutoTraderOff","PaperInvoiceOn", "PaperInvoiceOff", "AccountStateSwitch", 
                      "FVFCreditReversalAutomatic","CreditSoftOutage", "LACatalogFee", "LAExtraItem", "LACatalogItemFeeRefund", 
                      "LACatalogInsertionRefund","LAFinalValueFee", "LAFinalValueFeeRefund", "LABuyerPremiumPercentageFee", 
                      "LABuyerPremiumPercentageFeeRefund","LAAudioVideoFee", "LAAudioVideoFeeRefund", "FeeIPIXPhoto", 
                      "FeeIPIXSlideShow","CreditIPIXPhoto", "CreditIPIXSlideShow", "FeeTenDayAuction", 
                      "CreditTenDayAuction","TemporaryCredit", "TemporaryCreditReversal", "SubscriptionAABasic", 
                      "SubscriptionAAPro","CreditAABasic", "CreditAAPro", "FeeLargePicture", "CreditLargePicture", 
                      "FeePicturePack","CreditPicturePackPartial", "CreditPicturePackFull", "SubscriptioneBayStores", 
                      "CrediteBayStores","FeeInsertionFixedPrice", "CreditInsertionFixedPrice", 
                      "FeeFinalValueFixedPrice","CreditFinalValueFixedPrice", "ElectronicInvoiceOn", "ElectronicInvoiceOff", 
                      "FlagDDDDPending","FlagDDPaymentConfirmed", "FixedPriceDurationFee", "FixedPriceDurationCredit", 
                      "BuyItNowFee","BuyItNowCredit", "FeeSchedule", "CreditSchedule", "SubscriptionSMBasic", 
                      "SubscriptionSMBasicPro","CreditSMBasic", "CreditSMBasicPro", "StoresGTCFee", "StoresGTCCredit", 
                      "ListingDesignerFee","ListingDesignerCredit", "ExtendedAuctionFee", "ExtendedAcutionCredit", 
                      "PayPalOTPSucc","PayPalOTPPend", "PayPalFailed", "PayPalChargeBack", "ChargeBack", 
                      "ChargeBackReversal","PayPalRefund", "BonusPointsAddition", "BonusPointsReduction", 
                      "BonusPointsPaymentAutomatic","BonusPointsPaymentManual", "BonusPointsPaymentReversal", 
                      "BonusPointsCashPayout","VATCredit", "VATDebit", "VATStatusChangePending", "VATStatusChangeApproved", 
                      "VATStatusChange_Denied","VATStatusDeletedByCSR", "VATStatusDeletedByUser", "SMProListingDesignerFee", 
                      "SMProListingDesignerCredit","StoresSuccessfulListingFee", "StoresSuccessfulListingFeeCredit", 
                      "StoresReferralFee","StoresReferralCredit", "SubtitleFee", "SubtitleFeeCredit", 
                      "eBayStoreInventorySubscriptionCredit","AutoPmntReqExempt", "AutoPmntReqRein", "PictureManagerSubscriptionFee", 
                      "PictureManagerSubscriptionFeeCredit","SellerReportsBasicFee", "SellerReportsBasicCredit", "SellerReportsPlusFee", 
                      "SellerReportsPlusCredit","PaypalOnFile", "PaypalOnFileByCSR", "PaypalOffFile", "BorderFee", 
                      "BorderFeeCredit","FeeSearchableMobileDE", "SalesReportsPlusFee", "SalesReportsPlusCredit", 
                      "CreditSearchableMobileDE","EmailMarketingFee", "EmailMarketingCredit", "FeePictureShow", 
                      "CreditPictureShow","ProPackBundleFee", "ProPackBundleFeeCredit", "BasicUpgradePackBundleFee", 
                      "BasicUpgradePackBundleFeeCredit","ValuePackBundleFee", "ValuePackBundleFeeCredit", "ProPackPlusBundleFee", 
                      "ProPackPlusBundleFeeCredit","FinalEntry", "CustomCode", "ExtendedDurationFee", 
                      "ExtendedDurationFeeCredit","InternationalListingFee", "InternationalListingCredit", 
                      "MarketplaceResearchExpiredSubscriptionFee","MarketplaceResearchExpiredSubscriptionFeeCredit", 
                      "MarketplaceResearchBasicSubscriptionFee","MarketplaceResearchBasicSubscriptionFeeCredit", 
                      "MarketplaceResearchProSubscriptionFee","BasicBundleFee", "BasicBundleFeeCredit", 
                      "MarketplaceResearchProSubscriptionFeeCredit","VehicleLocalSubscriptionFee", "VehicleLocalSubscriptionFeeCredit", 
                      "VehicleLocalInsertionFee","VehicleLocalInsertionFeeCredit", "VehicleLocalFinalValueFee", 
                      "VehicleLocalFinalValueFeeCredit","VehicleLocalGTCFee", "VehicleLocalGTCFeeCredit", "eBayMotorsProFee", 
                      "CrediteBayMotorsProFee","eBayMotorsProFeatureFee", "CrediteBayMotorsProFeatureFee", "FeeGalleryPlus", 
                      "CreditGalleryPlus","PrivateListing", "CreditPrivateListing"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AccountEntry:{name:"AccountEntry", type:"AccountEntryType", xmlRequired:false}
            },
            ID:"AccountEntriesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccountEntrySortTypeCodeType",
            valueMap:["None", "AccountEntryCreatedTimeAscending", "AccountEntryCreatedTimeDescending", 
                      "AccountEntryItemNumberAscending","AccountEntryItemNumberDescending", "AccountEntryFeeTypeAscending", 
                      "AccountEntryFeeTypeDescending","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AccountDetailsEntryType:{name:"AccountDetailsEntryType", type:"AccountDetailEntryCodeType", 
                                         xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false},
                Balance:{name:"Balance", type:"AmountType", xmlRequired:false},
                Date:{name:"Date", type:"dateTime", xmlRequired:false},
                GrossDetailAmount:{name:"GrossDetailAmount", type:"AmountType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Memo:{name:"Memo", type:"string", xmlRequired:false},
                NetDetailAmount:{name:"NetDetailAmount", type:"AmountType", xmlRequired:false},
                RefNumber:{name:"RefNumber", type:"string", xmlRequired:false},
                VATPercent:{name:"VATPercent", type:"decimal", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false}
            },
            ID:"AccountEntryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccountHistorySelectionCodeType",
            valueMap:["LastInvoice", "SpecifiedInvoice", "BetweenSpecifiedDates", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AccountStateCodeType",
            valueMap:["Active", "Pending", "Inactive", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AccountState:{name:"AccountState", type:"AccountStateCodeType", xmlRequired:false},
                InvoicePayment:{name:"InvoicePayment", type:"AmountType", xmlRequired:false},
                InvoiceCredit:{name:"InvoiceCredit", type:"AmountType", xmlRequired:false},
                InvoiceNewFee:{name:"InvoiceNewFee", type:"AmountType", xmlRequired:false},
                AdditionalAccount:{name:"AdditionalAccount", type:"AdditionalAccountType", xmlRequired:false},
                AmountPastDue:{name:"AmountPastDue", type:"AmountType", xmlRequired:false},
                BankAccountInfo:{name:"BankAccountInfo", type:"string", xmlRequired:false},
                BankModifyDate:{name:"BankModifyDate", type:"dateTime", xmlRequired:false},
                BillingCycleDate:{name:"BillingCycleDate", type:"int", xmlRequired:false},
                CreditCardExpiration:{name:"CreditCardExpiration", type:"dateTime", xmlRequired:false},
                CreditCardInfo:{name:"CreditCardInfo", type:"string", xmlRequired:false},
                CreditCardModifyDate:{name:"CreditCardModifyDate", type:"dateTime", xmlRequired:false},
                CurrentBalance:{name:"CurrentBalance", type:"AmountType", xmlRequired:false},
                Email:{name:"Email", type:"string", xmlRequired:false},
                InvoiceBalance:{name:"InvoiceBalance", type:"AmountType", xmlRequired:false},
                InvoiceDate:{name:"InvoiceDate", type:"dateTime", xmlRequired:false},
                LastAmountPaid:{name:"LastAmountPaid", type:"AmountType", xmlRequired:false},
                LastPaymentDate:{name:"LastPaymentDate", type:"dateTime", xmlRequired:false},
                PastDue:{name:"PastDue", type:"boolean", xmlRequired:false},
                PaymentMethod:{name:"PaymentMethod", type:"SellerPaymentMethodCodeType", xmlRequired:false}
            },
            ID:"AccountSummaryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AdFormatEnabledCodeType",
            valueMap:["Disabled", "Enabled", "Only", "ClassifiedAdEnabled", "ClassifiedAdOnly"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"AdFormatEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AdFormatLeadStatusCodeType",
            valueMap:["New", "Responded", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AdditionalInformation:{name:"AdditionalInformation", type:"string", xmlRequired:false},
                Address:{name:"Address", type:"AddressType", xmlRequired:false},
                BestTimeToCall:{name:"BestTimeToCall", type:"string", xmlRequired:false},
                Email:{name:"Email", type:"string", xmlRequired:false},
                FirstName:{name:"FirstName", type:"string", xmlRequired:false},
                LastName:{name:"LastName", type:"string", xmlRequired:false},
                Phone:{name:"Phone", type:"string", xmlRequired:false},
                SubmittedTime:{name:"SubmittedTime", type:"dateTime", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                ItemTitle:{name:"ItemTitle", type:"string", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                MemberMessage:{name:"MemberMessage", type:"MemberMessageExchangeArrayType", xmlRequired:false},
                Status:{name:"Status", type:"AdFormatLeadStatusCodeType", xmlRequired:false},
                Phone2:{name:"Phone2", type:"string", xmlRequired:false},
                LeadFee:{name:"LeadFee", type:"AmountType", xmlRequired:false}
            },
            ID:"AdFormatLeadType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CorrelationID:{name:"CorrelationID", type:"string", xmlRequired:false},
                ItemID:{name:"ItemID", type:"string", xmlRequired:false},
                MemberMessage:{name:"MemberMessage", type:"MemberMessageType", xmlRequired:false}
            },
            ID:"AddMemberMessagesAAQToBidderRequestContainerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CorrelationID:{name:"CorrelationID", type:"string", xmlRequired:false},
                Ack:{name:"Ack", type:"AckCodeType", xmlRequired:false}
            },
            ID:"AddMemberMessagesAAQToBidderResponseContainerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Balance:{name:"Balance", type:"AmountType", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                AccountCode:{name:"AccountCode", type:"string", xmlRequired:false}
            },
            ID:"AdditionalAccountType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AddressOwnerCodeType",
            valueMap:["PayPal", "eBay", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AddressRecordTypeCodeType",
            valueMap:["Residential", "Business", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"AddressStatusCodeType",
            valueMap:["None", "Confirmed", "Unconfirmed", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                Street:{name:"Street", type:"string", xmlRequired:false},
                Street1:{name:"Street1", type:"string", xmlRequired:false},
                Street2:{name:"Street2", type:"string", xmlRequired:false},
                CityName:{name:"CityName", type:"string", xmlRequired:false},
                County:{name:"County", type:"string", xmlRequired:false},
                StateOrProvince:{name:"StateOrProvince", type:"string", xmlRequired:false},
                Country:{name:"Country", type:"CountryCodeType", xmlRequired:false},
                CountryName:{name:"CountryName", type:"string", xmlRequired:false},
                Phone:{name:"Phone", type:"string", xmlRequired:false},
                PhoneCountryCode:{name:"PhoneCountryCode", type:"CountryCodeType", xmlRequired:false},
                PhoneCountryPrefix:{name:"PhoneCountryPrefix", type:"string", xmlRequired:false},
                PhoneAreaOrCityCode:{name:"PhoneAreaOrCityCode", type:"string", xmlRequired:false},
                PhoneLocalNumber:{name:"PhoneLocalNumber", type:"string", xmlRequired:false},
                Phone2CountryCode:{name:"Phone2CountryCode", type:"CountryCodeType", xmlRequired:false},
                Phone2CountryPrefix:{name:"Phone2CountryPrefix", type:"string", xmlRequired:false},
                Phone2AreaOrCityCode:{name:"Phone2AreaOrCityCode", type:"string", xmlRequired:false},
                Phone2LocalNumber:{name:"Phone2LocalNumber", type:"string", xmlRequired:false},
                PostalCode:{name:"PostalCode", type:"string", xmlRequired:false},
                AddressID:{name:"AddressID", type:"string", xmlRequired:false},
                AddressOwner:{name:"AddressOwner", type:"AddressOwnerCodeType", xmlRequired:false},
                AddressStatus:{name:"AddressStatus", type:"AddressStatusCodeType", xmlRequired:false},
                ExternalAddressID:{name:"ExternalAddressID", type:"string", xmlRequired:false},
                InternationalName:{name:"InternationalName", type:"string", xmlRequired:false},
                InternationalStateAndCity:{name:"InternationalStateAndCity", type:"string", xmlRequired:false},
                InternationalStreet:{name:"InternationalStreet", type:"string", xmlRequired:false},
                CompanyName:{name:"CompanyName", type:"string", xmlRequired:false},
                AddressRecordType:{name:"AddressRecordType", type:"AddressRecordTypeCodeType", xmlRequired:false}
            },
            ID:"AddressType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TrackingID:{name:"TrackingID", type:"string", xmlRequired:false},
                TrackingPartnerCode:{name:"TrackingPartnerCode", type:"string", xmlRequired:false},
                ApplicationDeviceType:{name:"ApplicationDeviceType", type:"ApplicationDeviceTypeCodeType", 
                                       xmlRequired:false},
                AffiliateUserID:{name:"AffiliateUserID", type:"string", xmlRequired:false}
            },
            ID:"AffiliateTrackingDetailsType"
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                currencyID:{name:"currencyID", type:"CurrencyCodeType", xmlRequired:true, 
                            xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"double", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"AmountType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CallName:{name:"CallName", type:"string", xmlRequired:false},
                CountsTowardAggregate:{name:"CountsTowardAggregate", type:"boolean", xmlRequired:false},
                DailyHardLimit:{name:"DailyHardLimit", type:"long", xmlRequired:false},
                DailySoftLimit:{name:"DailySoftLimit", type:"long", xmlRequired:false},
                DailyUsage:{name:"DailyUsage", type:"long", xmlRequired:false},
                HourlyHardLimit:{name:"HourlyHardLimit", type:"long", xmlRequired:false},
                HourlySoftLimit:{name:"HourlySoftLimit", type:"long", xmlRequired:false},
                HourlyUsage:{name:"HourlyUsage", type:"long", xmlRequired:false},
                Period:{name:"Period", type:"int", xmlRequired:false},
                PeriodicHardLimit:{name:"PeriodicHardLimit", type:"long", xmlRequired:false},
                PeriodicSoftLimit:{name:"PeriodicSoftLimit", type:"long", xmlRequired:false},
                PeriodicUsage:{name:"PeriodicUsage", type:"long", xmlRequired:false},
                PeriodicStartDate:{name:"PeriodicStartDate", type:"dateTime", xmlRequired:false},
                ModTime:{name:"ModTime", type:"dateTime", xmlRequired:false},
                RuleCurrentStatus:{name:"RuleCurrentStatus", type:"AccessRuleCurrentStatusCodeType", 
                                   xmlRequired:false},
                RuleStatus:{name:"RuleStatus", type:"AccessRuleStatusCodeType", xmlRequired:false}
            },
            ID:"ApiAccessRuleType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ApplicationURL:{name:"ApplicationURL", type:"anyURI", xmlRequired:false},
                ApplicationEnable:{name:"ApplicationEnable", type:"EnableCodeType", xmlRequired:false},
                AlertEmail:{name:"AlertEmail", type:"anyURI", xmlRequired:false},
                AlertEnable:{name:"AlertEnable", type:"EnableCodeType", xmlRequired:false},
                NotificationPayloadType:{name:"NotificationPayloadType", type:"NotificationPayloadTypeCodeType", 
                                         xmlRequired:false},
                DeviceType:{name:"DeviceType", type:"DeviceTypeCodeType", xmlRequired:false}
            },
            ID:"ApplicationDeliveryPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ApplicationDeviceTypeCodeType",
            valueMap:["Browser", "Wireless", "Desktop", "SetTopTVBox", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Attribute:{name:"Attribute", type:"AttributeType", xmlRequired:false}
            },
            ID:"AttributeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AttributeSetArray:{name:"AttributeSetArray", type:"AttributeSetArrayType", xmlRequired:false}
            },
            ID:"AttributeRecommendationsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                AttributeSet:{name:"AttributeSet", type:"AttributeSetType", xmlRequired:false}
            },
            ID:"AttributeSetArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                attributeSetID:{name:"attributeSetID", type:"int", xmlAttribute:true},
                attributeSetVersion:{name:"attributeSetVersion", type:"string", xmlAttribute:true},
                Attribute:{name:"Attribute", type:"AttributeType", xmlRequired:false}
            },
            ID:"AttributeSetType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                attributeID:{name:"attributeID", type:"int", xmlAttribute:true},
                attributeLabel:{name:"attributeLabel", type:"string", xmlAttribute:true},
                Value:{name:"Value", type:"ValType", xmlRequired:false}
            },
            ID:"AttributeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                AuthenticationEntry:{name:"AuthenticationEntry", type:"AuthenticationEntryType", xmlRequired:false}
            },
            ID:"AuthenticationEntryArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AcceptURL:{name:"AcceptURL", type:"anyURI", xmlRequired:false},
                PrivacyPolicyURL:{name:"PrivacyPolicyURL", type:"anyURI", xmlRequired:false},
                RejectURL:{name:"RejectURL", type:"anyURI", xmlRequired:false},
                RuName:{name:"RuName", type:"string", xmlRequired:false},
                TokenReturnMethod:{name:"TokenReturnMethod", type:"TokenReturnMethodCodeType", xmlRequired:false}
            },
            ID:"AuthenticationEntryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                AverageRatingDetails:{name:"AverageRatingDetails", type:"AverageRatingDetailsType", xmlRequired:false}
            },
            ID:"AverageRatingDetailArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RatingDetail:{name:"RatingDetail", type:"FeedbackRatingDetailCodeType", xmlRequired:false},
                Rating:{name:"Rating", type:"double", xmlRequired:false},
                RatingCount:{name:"RatingCount", type:"int", xmlRequired:false}
            },
            ID:"AverageRatingDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BalanceCodeType",
            valueMap:["Other", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                currencyID:{name:"currencyID", type:"CurrencyCodeType", xmlRequired:true, 
                            xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"string", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"BasicAmountType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"BasicUpgradePackEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BestOfferActionCodeType",
            valueMap:["Accept", "Decline", "Counter", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                BestOffer:{name:"BestOffer", type:"BestOfferType", xmlRequired:false}
            },
            ID:"BestOfferArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"BestOfferAutoDeclineEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"BestOfferCounterEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BestOfferCount:{name:"BestOfferCount", type:"int", xmlRequired:false},
                BestOfferEnabled:{name:"BestOfferEnabled", type:"boolean", xmlRequired:false},
                BestOffer:{name:"BestOffer", type:"AmountType", xmlRequired:false},
                BestOfferStatus:{name:"BestOfferStatus", type:"BestOfferStatusCodeType", xmlRequired:false},
                BestOfferType:{name:"BestOfferType", type:"BestOfferTypeCodeType", xmlRequired:false}
            },
            ID:"BestOfferDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"BestOfferEnabledDefinitionType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"BestOfferIDType"})
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BestOfferStatusCodeType",
            valueMap:["Pending", "Accepted", "Declined", "Expired", "Retracted", "AdminEnded", "Active", 
                      "Countered","All", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BestOfferID:{name:"BestOfferID", type:"BestOfferIDType", xmlRequired:false},
                ExpirationTime:{name:"ExpirationTime", type:"dateTime", xmlRequired:false},
                Buyer:{name:"Buyer", type:"UserType", xmlRequired:false},
                Price:{name:"Price", type:"AmountType", xmlRequired:false},
                Status:{name:"Status", type:"BestOfferStatusCodeType", xmlRequired:false},
                Quantity:{name:"Quantity", type:"int", xmlRequired:false},
                BuyerMessage:{name:"BuyerMessage", type:"string", xmlRequired:false},
                SellerMessage:{name:"SellerMessage", type:"string", xmlRequired:false},
                BestOfferCodeType:{name:"BestOfferCodeType", type:"BestOfferTypeCodeType", xmlRequired:false},
                CallStatus:{name:"CallStatus", type:"string", xmlRequired:false}
            },
            ID:"BestOfferType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BestOfferTypeCodeType",
            valueMap:["BuyerBestOffer", "BuyerCounterOffer", "SellerCounterOffer", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BidActionCodeType",
            valueMap:["Unknown", "Bid", "NotUsed", "Retraction", "AutoRetraction", "Cancelled", "AutoCancel", 
                      "Absentee","BuyItNow", "Purchase", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                LiveAuctionBid:{name:"LiveAuctionBid", type:"BidApprovalType", xmlRequired:false}
            },
            ID:"BidApprovalArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                ApprovedBiddingLimit:{name:"ApprovedBiddingLimit", type:"AmountType", xmlRequired:false},
                DeclinedComment:{name:"DeclinedComment", type:"string", xmlRequired:false},
                Status:{name:"Status", type:"BidderStatusCodeType", xmlRequired:false}
            },
            ID:"BidApprovalType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BidGroupID:{name:"BidGroupID", type:"long", xmlRequired:false},
                IncludeNotes:{name:"IncludeNotes", type:"boolean", xmlRequired:false}
            },
            ID:"BidAssistantListType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                BidGroup:{name:"BidGroup", type:"BidGroupType", xmlRequired:false}
            },
            ID:"BidGroupArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BidGroupItemStatusCodeType",
            valueMap:["CurrentBid", "Cancelled", "Pending", "Skipped", "Ended", "Won", "GroupClosed", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                BidGroupItemStatus:{name:"BidGroupItemStatus", type:"BidGroupItemStatusCodeType", xmlRequired:false},
                MaxBidAmount:{name:"MaxBidAmount", type:"AmountType", xmlRequired:false}
            },
            ID:"BidGroupItemType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BidGroupStatusCodeType",
            valueMap:["Open", "Closed", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BidGroupItem:{name:"BidGroupItem", type:"BidGroupItemType", xmlRequired:false},
                BidGroupID:{name:"BidGroupID", type:"long", xmlRequired:false},
                BidGroupName:{name:"BidGroupName", type:"string", xmlRequired:false},
                BidGroupStatus:{name:"BidGroupStatus", type:"BidGroupStatusCodeType", xmlRequired:false}
            },
            ID:"BidGroupType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MinimumBidCount:{name:"MinimumBidCount", type:"int", xmlRequired:false},
                MaximumBidCount:{name:"MaximumBidCount", type:"int", xmlRequired:false}
            },
            ID:"BidRangeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                BidderDetail:{name:"BidderDetail", type:"BidderDetailType", xmlRequired:false}
            },
            ID:"BidderDetailArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                Email:{name:"Email", type:"string", xmlRequired:false},
                FeedbackScore:{name:"FeedbackScore", type:"int", xmlRequired:false},
                UniqueNegativeFeedbackCount:{name:"UniqueNegativeFeedbackCount", type:"int", xmlRequired:false},
                UniquePositiveFeedbackCount:{name:"UniquePositiveFeedbackCount", type:"int", xmlRequired:false},
                LiveAuctionBidResult:{name:"LiveAuctionBidResult", type:"LiveAuctionBidType", xmlRequired:false}
            },
            ID:"BidderDetailType"
        })
,
        isc.SimpleType.create({inheritsFrom:"int", name:"BidderIdType"})
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UnsuccessfulBidderNoticeIncludeMyItems:{name:"UnsuccessfulBidderNoticeIncludeMyItems", type:"boolean", 
                                                        xmlRequired:false}
            },
            ID:"BidderNoticePreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BidderStatusCodeType",
            valueMap:["Approved", "Denied", "Pending", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BidderTypeCodeType",
            valueMap:["AllBidder", "HighBidder", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ConvertedMaxBid:{name:"ConvertedMaxBid", type:"AmountType", xmlRequired:false},
                MaxBid:{name:"MaxBid", type:"AmountType", xmlRequired:false},
                QuantityBid:{name:"QuantityBid", type:"int", xmlRequired:false},
                QuantityWon:{name:"QuantityWon", type:"int", xmlRequired:false},
                Winning:{name:"Winning", type:"boolean", xmlRequired:false},
                BidAssistant:{name:"BidAssistant", type:"boolean", xmlRequired:false}
            },
            ID:"BiddingDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SummaryDays:{name:"SummaryDays", type:"int", xmlRequired:false},
                TotalBids:{name:"TotalBids", type:"int", xmlRequired:false},
                BidActivityWithSeller:{name:"BidActivityWithSeller", type:"int", xmlRequired:false},
                BidsToUniqueSellers:{name:"BidsToUniqueSellers", type:"int", xmlRequired:false},
                BidsToUniqueCategories:{name:"BidsToUniqueCategories", type:"int", xmlRequired:false},
                BidRetractions:{name:"BidRetractions", type:"int", xmlRequired:false},
                ItemBidDetails:{name:"ItemBidDetails", type:"ItemBidDetailsType", xmlRequired:false}
            },
            ID:"BiddingSummaryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BulkCatalogListerStatusCodeType",
            valueMap:["Preapproved", "Active", "OnWatch", "OnHold", "Suspended", "WatchWarn", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"BuyerProtectionCodeType",
            valueMap:["ItemIneligible", "ItemEligible", "ItemMarkedIneligible", "ItemMarkedEligible", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ShipToRegistrationCountry:{name:"ShipToRegistrationCountry", type:"boolean", xmlRequired:false},
                ZeroFeedbackScore:{name:"ZeroFeedbackScore", type:"boolean", xmlRequired:false},
                MinimumFeedbackScore:{name:"MinimumFeedbackScore", type:"int", xmlRequired:false},
                MaximumUnpaidItemStrikes:{name:"MaximumUnpaidItemStrikes", type:"boolean", xmlRequired:false},
                MaximumItemRequirements:{name:"MaximumItemRequirements", type:"MaximumItemRequirementsType", 
                                         xmlRequired:false},
                LinkedPayPalAccount:{name:"LinkedPayPalAccount", type:"boolean", xmlRequired:false},
                VerifiedUserRequirements:{name:"VerifiedUserRequirements", type:"VerifiedUserRequirementsType", 
                                          xmlRequired:false}
            },
            ID:"BuyerRequirementsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false}
            },
            ID:"BuyerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BuyingGuide:{name:"BuyingGuide", type:"BuyingGuideType", xmlRequired:false},
                BuyingGuideHub:{name:"BuyingGuideHub", type:"anyURI", xmlRequired:false}
            },
            ID:"BuyingGuideDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                ProductFinderID:{name:"ProductFinderID", type:"int", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false},
                Text:{name:"Text", type:"string", xmlRequired:false},
                CreationTime:{name:"CreationTime", type:"dateTime", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false}
            },
            ID:"BuyingGuideType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                BiddingCount:{name:"BiddingCount", type:"int", xmlRequired:false},
                WinningCount:{name:"WinningCount", type:"int", xmlRequired:false},
                TotalWinningCost:{name:"TotalWinningCost", type:"AmountType", xmlRequired:false},
                WonCount:{name:"WonCount", type:"int", xmlRequired:false},
                TotalWonCost:{name:"TotalWonCost", type:"AmountType", xmlRequired:false},
                WonDurationInDays:{name:"WonDurationInDays", type:"int", xmlRequired:false},
                BestOfferCount:{name:"BestOfferCount", type:"int", xmlRequired:false}
            },
            ID:"BuyingSummaryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DiscountName:{name:"DiscountName", type:"HandlingNameCodeType", xmlRequired:false},
                OrderHandlingAmount:{name:"OrderHandlingAmount", type:"AmountType", xmlRequired:false},
                EachAdditionalAmount:{name:"EachAdditionalAmount", type:"AmountType", xmlRequired:false},
                EachAdditionalOffAmount:{name:"EachAdditionalOffAmount", type:"AmountType", xmlRequired:false},
                EachAdditionalPercentOff:{name:"EachAdditionalPercentOff", type:"float", xmlRequired:false}
            },
            ID:"CalculatedHandlingDiscountType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CalculatedShippingChargeOptionCodeType",
            valueMap:["ChargeEachItem", "ChargeEntireOrder", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DiscountName:{name:"DiscountName", type:"DiscountNameCodeType", xmlRequired:false},
                DiscountProfile:{name:"DiscountProfile", type:"DiscountProfileType", xmlRequired:false}
            },
            ID:"CalculatedShippingDiscountType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CalculatedShippingAmountForEntireOrder:{name:"CalculatedShippingAmountForEntireOrder", type:"AmountType", 
                                                        xmlRequired:false},
                CalculatedShippingChargeOption:{name:"CalculatedShippingChargeOption", 
                                                type:"CalculatedShippingChargeOptionCodeType",xmlRequired:false},
                CalculatedShippingRateOption:{name:"CalculatedShippingRateOption", type:"CalculatedShippingRateOptionCodeType", 
                                              xmlRequired:false},
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false}
            },
            ID:"CalculatedShippingPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CalculatedShippingRateOptionCodeType",
            valueMap:["CombinedItemWeight", "IndividualItemWeight", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                OriginatingPostalCode:{name:"OriginatingPostalCode", type:"string", xmlRequired:false},
                PackageDepth:{name:"PackageDepth", type:"MeasureType", xmlRequired:false},
                PackageLength:{name:"PackageLength", type:"MeasureType", xmlRequired:false},
                PackageWidth:{name:"PackageWidth", type:"MeasureType", xmlRequired:false},
                PackagingHandlingCosts:{name:"PackagingHandlingCosts", type:"AmountType", xmlRequired:false},
                ShippingIrregular:{name:"ShippingIrregular", type:"boolean", xmlRequired:false},
                ShippingPackage:{name:"ShippingPackage", type:"ShippingPackageCodeType", xmlRequired:false},
                WeightMajor:{name:"WeightMajor", type:"MeasureType", xmlRequired:false},
                WeightMinor:{name:"WeightMinor", type:"MeasureType", xmlRequired:false},
                InternationalPackagingHandlingCosts:{name:"InternationalPackagingHandlingCosts", type:"AmountType", 
                                                     xmlRequired:false}
            },
            ID:"CalculatedShippingRateType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CancelOffer:{name:"CancelOffer", type:"CancelOfferType", xmlRequired:false}
            },
            ID:"CancelOfferArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Offer:{name:"Offer", type:"OfferType", xmlRequired:false},
                Explanation:{name:"Explanation", type:"string", xmlRequired:false}
            },
            ID:"CancelOfferType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CartItem:{name:"CartItem", type:"CartItemType", xmlRequired:false}
            },
            ID:"CartItemArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                ReferenceID:{name:"ReferenceID", type:"long", xmlRequired:false},
                Action:{name:"Action", type:"ModifyActionCodeType", xmlRequired:false}
            },
            ID:"CartItemType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CartID:{name:"CartID", type:"long", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false},
                CartStatus:{name:"CartStatus", type:"OrderStatusCodeType", xmlRequired:false},
                CreationTime:{name:"CreationTime", type:"dateTime", xmlRequired:false},
                ExpirationTime:{name:"ExpirationTime", type:"dateTime", xmlRequired:false},
                CheckoutURL:{name:"CheckoutURL", type:"anyURI", xmlRequired:false},
                CheckoutCompleteRedirect:{name:"CheckoutCompleteRedirect", type:"CheckoutCompleteRedirectType", 
                                          xmlRequired:false},
                CartItemArray:{name:"CartItemArray", type:"CartItemArrayType", xmlRequired:false},
                OrderDetail:{name:"OrderDetail", type:"CheckoutOrderDetailType", xmlRequired:false}
            },
            ID:"CartType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Title:{name:"Title", type:"string", xmlRequired:false},
                DetailsURL:{name:"DetailsURL", type:"anyURI", xmlRequired:false},
                StockPhotoURL:{name:"StockPhotoURL", type:"anyURI", xmlRequired:false},
                DisplayStockPhotos:{name:"DisplayStockPhotos", type:"boolean", xmlRequired:false},
                ItemCount:{name:"ItemCount", type:"int", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false},
                ProductReferenceID:{name:"ProductReferenceID", type:"long", xmlRequired:false},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:false},
                ItemSpecifics:{name:"ItemSpecifics", type:"NameValueListArrayType", xmlRequired:false},
                ReviewCount:{name:"ReviewCount", type:"int", xmlRequired:false},
                ReviewDetails:{name:"ReviewDetails", type:"ReviewDetailsType", xmlRequired:false}
            },
            ID:"CatalogProductType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Category:{name:"Category", type:"CategoryType", xmlRequired:false}
            },
            ID:"CategoryArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CategoryFeatureDetailLevelCodeType",
            valueMap:["ReturnAll", "ReturnFeatureDefinitions", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                ListingDuration:{name:"ListingDuration", type:"ListingDurationReferenceType", xmlRequired:false},
                ShippingTermsRequired:{name:"ShippingTermsRequired", type:"boolean", xmlRequired:false},
                BestOfferEnabled:{name:"BestOfferEnabled", type:"boolean", xmlRequired:false},
                DutchBINEnabled:{name:"DutchBINEnabled", type:"boolean", xmlRequired:false},
                UserConsentRequired:{name:"UserConsentRequired", type:"boolean", xmlRequired:false},
                HomePageFeaturedEnabled:{name:"HomePageFeaturedEnabled", type:"boolean", xmlRequired:false},
                ProPackEnabled:{name:"ProPackEnabled", type:"boolean", xmlRequired:false},
                BasicUpgradePackEnabled:{name:"BasicUpgradePackEnabled", type:"boolean", xmlRequired:false},
                ValuePackEnabled:{name:"ValuePackEnabled", type:"boolean", xmlRequired:false},
                ProPackPlusEnabled:{name:"ProPackPlusEnabled", type:"boolean", xmlRequired:false},
                AdFormatEnabled:{name:"AdFormatEnabled", type:"AdFormatEnabledCodeType", xmlRequired:false},
                DigitalDeliveryEnabled:{name:"DigitalDeliveryEnabled", type:"DigitalDeliveryEnabledCodeType", 
                                        xmlRequired:false},
                BestOfferCounterEnabled:{name:"BestOfferCounterEnabled", type:"boolean", xmlRequired:false},
                BestOfferAutoDeclineEnabled:{name:"BestOfferAutoDeclineEnabled", type:"boolean", xmlRequired:false},
                LocalMarketSpecialitySubscription:{name:"LocalMarketSpecialitySubscription", type:"boolean", xmlRequired:false},
                LocalMarketRegularSubscription:{name:"LocalMarketRegularSubscription", type:"boolean", xmlRequired:false},
                LocalMarketPremiumSubscription:{name:"LocalMarketPremiumSubscription", type:"boolean", xmlRequired:false},
                LocalMarketNonSubscription:{name:"LocalMarketNonSubscription", type:"boolean", xmlRequired:false},
                ExpressEnabled:{name:"ExpressEnabled", type:"boolean", xmlRequired:false},
                ExpressPicturesRequired:{name:"ExpressPicturesRequired", type:"boolean", xmlRequired:false},
                ExpressConditionRequired:{name:"ExpressConditionRequired", type:"boolean", xmlRequired:false},
                MinimumReservePrice:{name:"MinimumReservePrice", type:"double", xmlRequired:false},
                SellerContactDetailsEnabled:{name:"SellerContactDetailsEnabled", type:"boolean", xmlRequired:false},
                TransactionConfirmationRequestEnabled:{name:"TransactionConfirmationRequestEnabled", type:"boolean", xmlRequired:false},
                StoreInventoryEnabled:{name:"StoreInventoryEnabled", type:"boolean", xmlRequired:false},
                SkypeMeTransactionalEnabled:{name:"SkypeMeTransactionalEnabled", type:"boolean", xmlRequired:false},
                SkypeMeNonTransactionalEnabled:{name:"SkypeMeNonTransactionalEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdPaymentMethodEnabled:{name:"ClassifiedAdPaymentMethodEnabled", 
                                                  type:"ClassifiedAdPaymentMethodEnabledCodeType",xmlRequired:false},
                ClassifiedAdShippingMethodEnabled:{name:"ClassifiedAdShippingMethodEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdBestOfferEnabled:{name:"ClassifiedAdBestOfferEnabled", type:"ClassifiedAdBestOfferEnabledCodeType", 
                                              xmlRequired:false},
                ClassifiedAdCounterOfferEnabled:{name:"ClassifiedAdCounterOfferEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdAutoDeclineEnabled:{name:"ClassifiedAdAutoDeclineEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdContactByPhoneEnabled:{name:"ClassifiedAdContactByPhoneEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdContactByEmailEnabled:{name:"ClassifiedAdContactByEmailEnabled", type:"boolean", xmlRequired:false},
                SafePaymentRequired:{name:"SafePaymentRequired", type:"boolean", xmlRequired:false},
                ClassifiedAdPayPerLeadEnabled:{name:"ClassifiedAdPayPerLeadEnabled", type:"boolean", xmlRequired:false}
            },
            ID:"CategoryFeatureType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CategoryFinanceOffer:{name:"CategoryFinanceOffer", type:"CategoryFinanceOfferType", xmlRequired:false}
            },
            ID:"CategoryFinanceOfferArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FinanceOfferID:{name:"FinanceOfferID", type:"string", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false}
            },
            ID:"CategoryFinanceOfferType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CategoryListingsOrderCodeType",
            valueMap:["NoFilter", "ItemsBy24Hr", "ItemsEndToday", "ItemsEndIn5Hr", "SortByPriceAsc", 
                      "SortByPriceDesc","BestMatchSort", "DistanceSort", "CustomCode", "BestMatchCategoryGroup"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CategoryListingsSearchCodeType",
            valueMap:["Featured", "SuperFeatured", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                oldID:{name:"oldID", type:"string", xmlAttribute:true},
                id:{name:"id", type:"string", xmlAttribute:true}
            },
            ID:"CategoryMappingType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BestOfferEnabled:{name:"BestOfferEnabled", type:"boolean", xmlRequired:false},
                AutoPayEnabled:{name:"AutoPayEnabled", type:"boolean", xmlRequired:false},
                B2BVATEnabled:{name:"B2BVATEnabled", type:"boolean", xmlRequired:false},
                CatalogEnabled:{name:"CatalogEnabled", type:"boolean", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                CategoryLevel:{name:"CategoryLevel", type:"int", xmlRequired:false},
                CategoryName:{name:"CategoryName", type:"string", xmlRequired:false},
                CategoryParentID:{name:"CategoryParentID", type:"string", xmlRequired:false},
                CategoryParentName:{name:"CategoryParentName", type:"string", xmlRequired:false},
                ProductSearchPageAvailable:{name:"ProductSearchPageAvailable", type:"boolean", xmlRequired:false},
                ProductFinderIDs:{name:"ProductFinderIDs", type:"ExtendedProductFinderIDType", xmlRequired:false},
                CharacteristicsSets:{name:"CharacteristicsSets", type:"CharacteristicsSetType", xmlRequired:false},
                Expired:{name:"Expired", type:"boolean", xmlRequired:false},
                IntlAutosFixedCat:{name:"IntlAutosFixedCat", type:"boolean", xmlRequired:false},
                LeafCategory:{name:"LeafCategory", type:"boolean", xmlRequired:false},
                Virtual:{name:"Virtual", type:"boolean", xmlRequired:false},
                NumOfItems:{name:"NumOfItems", type:"int", xmlRequired:false},
                SellerGuaranteeEligible:{name:"SellerGuaranteeEligible", type:"boolean", xmlRequired:false},
                ORPA:{name:"ORPA", type:"boolean", xmlRequired:false},
                ORRA:{name:"ORRA", type:"boolean", xmlRequired:false},
                LSD:{name:"LSD", type:"boolean", xmlRequired:false},
                Keywords:{name:"Keywords", type:"string", xmlRequired:false}
            },
            ID:"CategoryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ID:{name:"ID", type:"string", xmlRequired:false}
            },
            ID:"CharacteristicSetIDsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AttributeID:{name:"AttributeID", type:"int", xmlRequired:true},
                DateFormat:{name:"DateFormat", type:"string", xmlRequired:false},
                DisplaySequence:{name:"DisplaySequence", type:"string", xmlRequired:false},
                DisplayUOM:{name:"DisplayUOM", type:"string", xmlRequired:false},
                Label:{name:"Label", type:"LabelType", xmlRequired:false},
                SortOrder:{name:"SortOrder", type:"SortOrderCodeType", xmlRequired:false},
                ValueList:{name:"ValueList", type:"ValType", xmlRequired:false}
            },
            ID:"CharacteristicType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CharacteristicsSearchCodeType",
            valueMap:["Single", "Multi", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                HistogramEntry:{name:"HistogramEntry", type:"HistogramEntryType", xmlRequired:false}
            },
            ID:"CharacteristicsSetProductHistogramType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:false},
                AttributeSetVersion:{name:"AttributeSetVersion", type:"string", xmlRequired:false},
                Characteristics:{name:"Characteristics", type:"CharacteristicType", xmlRequired:false}
            },
            ID:"CharacteristicsSetType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                id:{name:"id", type:"string", xmlAttribute:true},
                type:{name:"type", type:"CharityAffiliationTypeCodeType", xmlAttribute:true}
            },
            ID:"CharityAffiliationType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CharityAffiliationTypeCodeType",
            valueMap:["Community", "Direct", "Remove", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CharityID:{name:"CharityID", type:"CharityIDType", xmlRequired:false}
            },
            ID:"CharityAffiliationsType"
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                type:{name:"type", type:"CharityAffiliationTypeCodeType", xmlRequired:true, 
                      xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"string", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"CharityIDType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                id:{name:"id", type:"string", xmlAttribute:true},
                Name:{name:"Name", type:"string", xmlRequired:false},
                Mission:{name:"Mission", type:"string", xmlRequired:false},
                LogoURL:{name:"LogoURL", type:"anyURI", xmlRequired:false},
                Status:{name:"Status", type:"CharityStatusCodeType", xmlRequired:false},
                SearchableString:{name:"SearchableString", type:"string", xmlRequired:false},
                CharityRegion:{name:"CharityRegion", type:"int", xmlRequired:false},
                CharityDomain:{name:"CharityDomain", type:"int", xmlRequired:false},
                CharityID:{name:"CharityID", type:"string", xmlRequired:false}
            },
            ID:"CharityInfoType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CharitySellerStatusCodeType",
            valueMap:["Suspended", "Registered", "Closed", "CreditCardExpired", "TokenExpired", 
                      "CreditCardAboutToExpire","RegisteredNoCreditCard", "NotRegisteredLostDirectSellerStatus", 
                      "DirectDebitRejected","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CharitySellerStatus:{name:"CharitySellerStatus", type:"CharitySellerStatusCodeType", 
                                     xmlRequired:false},
                CharityAffiliation:{name:"CharityAffiliation", type:"CharityAffiliationType", xmlRequired:false}
            },
            ID:"CharitySellerType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CharityStatusCodeType",
            valueMap:["Valid", "NoLongerValid", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CharityName:{name:"CharityName", type:"string", xmlRequired:false},
                CharityNumber:{name:"CharityNumber", type:"int", xmlRequired:false},
                DonationPercent:{name:"DonationPercent", type:"float", xmlRequired:false},
                CharityID:{name:"CharityID", type:"string", xmlRequired:false},
                Mission:{name:"Mission", type:"string", xmlRequired:false},
                LogoURL:{name:"LogoURL", type:"string", xmlRequired:false},
                Status:{name:"Status", type:"CharityStatusCodeType", xmlRequired:false},
                CharityListing:{name:"CharityListing", type:"boolean", xmlRequired:false}
            },
            ID:"CharityType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false}
            },
            ID:"CheckoutCompleteRedirectType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CheckoutMethodCodeType",
            valueMap:["Other", "ThirdPartyCheckout", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TotalCartMerchandiseCost:{name:"TotalCartMerchandiseCost", type:"AmountType", xmlRequired:false},
                TotalCartShippingCost:{name:"TotalCartShippingCost", type:"AmountType", xmlRequired:false},
                TotalTaxAmount:{name:"TotalTaxAmount", type:"AmountType", xmlRequired:false},
                TotalAmount:{name:"TotalAmount", type:"AmountType", xmlRequired:false}
            },
            ID:"CheckoutOrderDetailType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CheckoutStatusCodeType",
            valueMap:["CheckoutComplete", "CheckoutIncomplete", "BuyerRequestsTotal", "SellerResponded", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                eBayPaymentStatus:{name:"eBayPaymentStatus", type:"PaymentStatusCodeType", xmlRequired:false},
                LastModifiedTime:{name:"LastModifiedTime", type:"dateTime", xmlRequired:false},
                PaymentMethod:{name:"PaymentMethod", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                Status:{name:"Status", type:"CompleteStatusCodeType", xmlRequired:false}
            },
            ID:"CheckoutStatusType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdAutoDeclineEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ClassifiedAdBestOfferEnabledCodeType",
            valueMap:["Disabled", "Enabled", "Required", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdBestOfferEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdContactByEmailEnabledDefintionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdContactByPhoneEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdCounterOfferEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdPayPerLeadEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ClassifiedAdPaymentMethodEnabledCodeType",
            valueMap:["EnabledWithCheckout", "EnabledWithoutCheckout", "NotSupported", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdPaymentMethodEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ClassifiedAdShippingMethodEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CombinedPaymentOptionCodeType",
            valueMap:["NoCombinedPayment", "DiscountSpecified", "SpecifyDiscountLater", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CombinedPaymentPeriodCodeType",
            valueMap:["Days_3", "Days_5", "Days_7", "Days_14", "Days_30", "Ineligible", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CalculatedShippingPreferences:{name:"CalculatedShippingPreferences", type:"CalculatedShippingPreferencesType", 
                                               xmlRequired:false},
                CombinedPaymentOption:{name:"CombinedPaymentOption", type:"CombinedPaymentOptionCodeType", 
                                       xmlRequired:false},
                CombinedPaymentPeriod:{name:"CombinedPaymentPeriod", type:"CombinedPaymentPeriodCodeType", 
                                       xmlRequired:false},
                FlatShippingPreferences:{name:"FlatShippingPreferences", type:"FlatShippingPreferencesType", 
                                         xmlRequired:false}
            },
            ID:"CombinedPaymentPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CommentTypeCodeType",
            valueMap:["Positive", "Neutral", "Negative", "Withdrawn", "IndependentlyWithdrawn", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CompleteStatusCodeType",
            valueMap:["Incomplete", "Complete", "Pending", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ConditionSelectionCodeType",
            valueMap:["All", "New", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TimeZoneID:{name:"TimeZoneID", type:"string", xmlRequired:false},
                Hours1Days:{name:"Hours1Days", type:"DaysCodeType", xmlRequired:false},
                Hours1AnyTime:{name:"Hours1AnyTime", type:"boolean", xmlRequired:false},
                Hours1From:{name:"Hours1From", type:"time", xmlRequired:false},
                Hours1To:{name:"Hours1To", type:"time", xmlRequired:false},
                Hours2Days:{name:"Hours2Days", type:"DaysCodeType", xmlRequired:false},
                Hours2AnyTime:{name:"Hours2AnyTime", type:"boolean", xmlRequired:false},
                Hours2From:{name:"Hours2From", type:"time", xmlRequired:false},
                Hours2To:{name:"Hours2To", type:"time", xmlRequired:false}
            },
            ID:"ContactHoursDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Keyword:{name:"Keyword", type:"string", xmlRequired:false},
                Category:{name:"Category", type:"CategoryType", xmlRequired:false},
                Ranking:{name:"Ranking", type:"int", xmlRequired:false}
            },
            ID:"ContextSearchAssetType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CountryCodeType",
            valueMap:["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", 
                      "AZ","BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", 
                      "BV","BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", 
                      "CL","CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CY", 
                      "CZ","DK", "DJ", "DM", "DO", "TP", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", 
                      "FO","FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", 
                      "GL","GD", "GP", "GU", "GT", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", 
                      "IS","IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", 
                      "KP","KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", 
                      "MK","MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", 
                      "MD","MC", "MN", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", 
                      "NI","NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", 
                      "PE","PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", 
                      "PM","VC", "WS", "SM", "ST", "SA", "SN", "SC", "SL", "SG", "SK", "SI", "SB", "SO", 
                      "ZA","GS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", 
                      "TH","TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", 
                      "US","UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "YU", "ZM", 
                      "ZW","AA", "QM", "QN", "QO", "QP", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Country:{name:"Country", type:"CountryCodeType", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"CountryDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CrossPromotionEnabled:{name:"CrossPromotionEnabled", type:"boolean", xmlRequired:false},
                CrossSellItemFormatSortFilter:{name:"CrossSellItemFormatSortFilter", type:"ItemFormatSortFilterCodeType", 
                                               xmlRequired:false},
                CrossSellGallerySortFilter:{name:"CrossSellGallerySortFilter", type:"GallerySortFilterCodeType", 
                                            xmlRequired:false},
                CrossSellItemSortFilter:{name:"CrossSellItemSortFilter", type:"ItemSortFilterCodeType", 
                                         xmlRequired:false},
                UpSellItemFormatSortFilter:{name:"UpSellItemFormatSortFilter", type:"ItemFormatSortFilterCodeType", 
                                            xmlRequired:false},
                UpSellGallerySortFilter:{name:"UpSellGallerySortFilter", type:"GallerySortFilterCodeType", 
                                         xmlRequired:false},
                UpSellItemSortFilter:{name:"UpSellItemSortFilter", type:"ItemSortFilterCodeType", xmlRequired:false}
            },
            ID:"CrossPromotionPreferencesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                PrimaryScheme:{name:"PrimaryScheme", type:"PromotionSchemeCodeType", xmlRequired:false},
                PromotionMethod:{name:"PromotionMethod", type:"PromotionMethodCodeType", xmlRequired:false},
                SellerID:{name:"SellerID", type:"string", xmlRequired:false},
                ShippingDiscount:{name:"ShippingDiscount", type:"boolean", xmlRequired:true},
                StoreName:{name:"StoreName", type:"string", xmlRequired:false},
                PromotedItem:{name:"PromotedItem", type:"PromotedItemType", xmlRequired:false}
            },
            ID:"CrossPromotionsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"CurrencyCodeType",
            valueMap:["AFA", "ALL", "DZD", "ADP", "AOA", "ARS", "AMD", "AWG", "AZM", "BSD", "BHD", "BDT", 
                      "BBD","BYR", "BZD", "BMD", "BTN", "INR", "BOV", "BOB", "BAM", "BWP", "BRL", "BND", 
                      "BGL","BGN", "BIF", "KHR", "CAD", "CVE", "KYD", "XAF", "CLF", "CLP", "CNY", "COP", 
                      "KMF","CDF", "CRC", "HRK", "CUP", "CYP", "CZK", "DKK", "DJF", "DOP", "TPE", "ECV", 
                      "ECS","EGP", "SVC", "ERN", "EEK", "ETB", "FKP", "FJD", "GMD", "GEL", "GHC", "GIP", 
                      "GTQ","GNF", "GWP", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "IDR", "IRR", "IQD", 
                      "ILS","JMD", "JPY", "JOD", "KZT", "KES", "AUD", "KPW", "KRW", "KWD", "KGS", "LAK", 
                      "LVL","LBP", "LSL", "LRD", "LYD", "CHF", "LTL", "MOP", "MKD", "MGF", "MWK", "MYR", 
                      "MVR","MTL", "EUR", "MRO", "MUR", "MXN", "MXV", "MDL", "MNT", "XCD", "MZM", "MMK", 
                      "ZAR","NAD", "NPR", "ANG", "XPF", "NZD", "NIO", "NGN", "NOK", "OMR", "PKR", "PAB", 
                      "PGK","PYG", "PEN", "PHP", "PLN", "USD", "QAR", "ROL", "RUB", "RUR", "RWF", "SHP", 
                      "WST","STD", "SAR", "SCR", "SLL", "SGD", "SKK", "SIT", "SBD", "SOS", "LKR", "SDD", 
                      "SRG","SZL", "SEK", "SYP", "TWD", "TJS", "TZS", "THB", "XOF", "TOP", "TTD", "TND", 
                      "TRL","TMM", "UGX", "UAH", "AED", "GBP", "USS", "USN", "UYU", "UZS", "VUV", "VEB", 
                      "VND","MAD", "YER", "YUM", "ZMK", "ZWD", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"CurrencyDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                attributeSetID:{name:"attributeSetID", type:"int", xmlAttribute:true},
                DataElement:{name:"DataElement", type:"string", xmlRequired:false},
                DataElementID:{name:"DataElementID", type:"int", xmlRequired:false}
            },
            ID:"DataElementSetType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DateSpecifierCodeType",
            valueMap:["M", "D", "Y", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Year:{name:"Year", type:"int", xmlRequired:false},
                Month:{name:"Month", type:"int", xmlRequired:false},
                Day:{name:"Day", type:"int", xmlRequired:false}
            },
            ID:"DateType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DaysCodeType",
            valueMap:["None", "EveryDay", "Weekdays", "Weekends", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DepositTypeCodeType",
            valueMap:["None", "OtherMethod", "FastDeposit", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DescriptionReviseModeCodeType",
            valueMap:["Replace", "Prepend", "Append", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DescriptionTemplateCodeType",
            valueMap:["Layout", "Theme", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                GroupID:{name:"GroupID", type:"int", xmlRequired:false},
                ID:{name:"ID", type:"int", xmlRequired:false},
                ImageURL:{name:"ImageURL", type:"anyURI", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                TemplateXML:{name:"TemplateXML", type:"string", xmlRequired:false},
                Type:{name:"Type", type:"DescriptionTemplateCodeType", xmlRequired:false}
            },
            ID:"DescriptionTemplateType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DetailNameCodeType",
            valueMap:["CountryDetails", "CurrencyDetails", "PaymentOptionDetails", "RegionDetails", 
                      "ShippingLocationDetails","ShippingServiceDetails", "SiteDetails", "TaxJurisdiction", "URLDetails", 
                      "TimeZoneDetails","CustomCode", "DispatchTimeMaxDetails"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DeviceTypeCodeType",
            valueMap:["Platform", "SMS", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Requirements:{name:"Requirements", type:"string", xmlRequired:false},
                Method:{name:"Method", type:"DigitalDeliveryMethodCodeType", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Instructions:{name:"Instructions", type:"string", xmlRequired:false}
            },
            ID:"DigitalDeliveryDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DigitalDeliveryEnabledCodeType",
            valueMap:["Disabled", "Enabled", "Promoted", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"DigitalDeliveryEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DigitalDeliveryMethodCodeType",
            valueMap:["None", "DownloadURL", "AlternateDeliveryInstructions", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DiscountCodeType",
            valueMap:["Percentage", "Price", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DiscountNameCodeType",
            valueMap:["EachAdditionalAmount", "EachAdditionalAmountOff", "EachAdditionalPercentOff", 
                      "IndividualItemWeight","CombinedItemWeight", "WeightOff", "ShippingCostXForAmountY", 
                      "ShippingCostXForItemCountN","MaximumShippingCostPerOrder", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DiscountProfileID:{name:"DiscountProfileID", type:"string", xmlRequired:false},
                DiscountProfileName:{name:"DiscountProfileName", type:"string", xmlRequired:false},
                EachAdditionalAmount:{name:"EachAdditionalAmount", type:"AmountType", xmlRequired:false},
                EachAdditionalAmountOff:{name:"EachAdditionalAmountOff", type:"AmountType", xmlRequired:false},
                EachAdditionalPercentOff:{name:"EachAdditionalPercentOff", type:"float", xmlRequired:false},
                WeightOff:{name:"WeightOff", type:"MeasureType", xmlRequired:false},
                MappedDiscountProfileID:{name:"MappedDiscountProfileID", type:"string", xmlRequired:false}
            },
            ID:"DiscountProfileType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DispatchTimeMax:{name:"DispatchTimeMax", type:"int", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"DispatchTimeMaxDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"DisplayPayNowButtonCodeType",
            valueMap:["ShowPayNowButtonForAllPaymentMethods", "ShowPayNowButtonForPayPalOnly", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Dispute:{name:"Dispute", type:"DisputeType", xmlRequired:false}
            },
            ID:"DisputeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisputeID:{name:"DisputeID", type:"DisputeIDType", xmlRequired:false},
                DisputeRecordType:{name:"DisputeRecordType", type:"DisputeRecordTypeCodeType", xmlRequired:false},
                DisputeState:{name:"DisputeState", type:"DisputeStateCodeType", xmlRequired:false},
                DisputeStatus:{name:"DisputeStatus", type:"DisputeStatusCodeType", xmlRequired:false},
                OtherPartyRole:{name:"OtherPartyRole", type:"TradingRoleCodeType", xmlRequired:false},
                OtherPartyName:{name:"OtherPartyName", type:"string", xmlRequired:false},
                UserRole:{name:"UserRole", type:"TradingRoleCodeType", xmlRequired:false},
                BuyerUserID:{name:"BuyerUserID", type:"UserIDType", xmlRequired:false},
                SellerUserID:{name:"SellerUserID", type:"UserIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                DisputeReason:{name:"DisputeReason", type:"DisputeReasonCodeType", xmlRequired:false},
                DisputeExplanation:{name:"DisputeExplanation", type:"DisputeExplanationCodeType", xmlRequired:false},
                DisputeCreditEligibility:{name:"DisputeCreditEligibility", type:"DisputeCreditEligibilityCodeType", 
                                          xmlRequired:false},
                DisputeCreatedTime:{name:"DisputeCreatedTime", type:"dateTime", xmlRequired:false},
                DisputeModifiedTime:{name:"DisputeModifiedTime", type:"dateTime", xmlRequired:false},
                DisputeResolution:{name:"DisputeResolution", type:"DisputeResolutionType", xmlRequired:false},
                DisputeMessage:{name:"DisputeMessage", type:"DisputeMessageType", xmlRequired:false},
                Escalation:{name:"Escalation", type:"boolean", xmlRequired:false},
                PurchaseProtection:{name:"PurchaseProtection", type:"boolean", xmlRequired:false}
            },
            ID:"DisputeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DistanceMeasurement:{name:"DistanceMeasurement", type:"int", xmlRequired:true},
                DistanceUnit:{name:"DistanceUnit", type:"string", xmlRequired:false}
            },
            ID:"DistanceType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Department:{name:"Department", type:"ExpressHistogramDepartmentType", xmlRequired:false}
            },
            ID:"DomainHistogramType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"DutchBINEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"EBaySubscriptionTypeCodeType",
            valueMap:["SellerAssistant", "SellerAssistantPro", "EBayStoreBasic", "EBayStoreFeatured", 
                      "EBayStoreAnchor","SellingManager", "SellingManagerPro", "PictureManagerLevel1", 
                      "PictureManagerLevel2","PictureManagerLevel3", "PictureManagerLevel4", "PictureManagerLevel5", 
                      "PictureManagerLevel6","PictureManagerLevel7", "SellerReportsBasic", "SellerReportsPlus", 
                      "FileExchange","LocalMarketSpecialty", "LocalMarketRegular", "LocalMarketPremium", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"EnableCodeType",
            valueMap:["Enable", "Disable", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TemplateText:{name:"TemplateText", type:"string", xmlRequired:false},
                LogoURL:{name:"LogoURL", type:"anyURI", xmlRequired:false},
                LogoType:{name:"LogoType", type:"EndOfAuctionLogoTypeCodeType", xmlRequired:false},
                EmailCustomized:{name:"EmailCustomized", type:"boolean", xmlRequired:false},
                TextCustomized:{name:"TextCustomized", type:"boolean", xmlRequired:false},
                LogoCustomized:{name:"LogoCustomized", type:"boolean", xmlRequired:false},
                CopyEmail:{name:"CopyEmail", type:"boolean", xmlRequired:false}
            },
            ID:"EndOfAuctionEmailPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"EndOfAuctionLogoTypeCodeType",
            valueMap:["WinningBidderNotice", "Store", "Customized", "CustomCode", "None"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"EndReasonCodeType",
            valueMap:["LostOrBroken", "NotAvailable", "Incorrect", "OtherListingError", "CustomCode", 
                      "SellToHighBidder"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"EscrowCodeType",
            valueMap:["ByBuyer", "BySeller", "None", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ExpansionItem:{name:"ExpansionItem", type:"SearchResultItemType", xmlRequired:false},
                TotalAvailable:{name:"TotalAvailable", type:"int", xmlRequired:false}
            },
            ID:"ExpansionArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ExpressConditionRequiredDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExpressDetailLevelCodeType",
            valueMap:["Coarse", "Fine", "None", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ExpressLargeImage:{name:"ExpressLargeImage", type:"anyURI", xmlRequired:false},
                ExpressSmallImage:{name:"ExpressSmallImage", type:"anyURI", xmlRequired:false},
                Condition:{name:"Condition", type:"string", xmlRequired:false}
            },
            ID:"ExpressDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ExpressEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DomainDetails:{name:"DomainDetails", type:"ExpressHistogramDomainDetailsType", 
                               xmlRequired:false},
                ProductType:{name:"ProductType", type:"ExpressHistogramProductType", xmlRequired:false}
            },
            ID:"ExpressHistogramAisleType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DomainDetails:{name:"DomainDetails", type:"ExpressHistogramDomainDetailsType", 
                               xmlRequired:false},
                Aisle:{name:"Aisle", type:"ExpressHistogramAisleType", xmlRequired:false}
            },
            ID:"ExpressHistogramDepartmentType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                BreadCrumb:{name:"BreadCrumb", type:"string", xmlRequired:false},
                ItemCount:{name:"ItemCount", type:"int", xmlRequired:false},
                ProductCount:{name:"ProductCount", type:"int", xmlRequired:false},
                ImageURL:{name:"ImageURL", type:"anyURI", xmlRequired:false}
            },
            ID:"ExpressHistogramDomainDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DomainDetails:{name:"DomainDetails", type:"ExpressHistogramDomainDetailsType", 
                               xmlRequired:false}
            },
            ID:"ExpressHistogramProductType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExpressHistogramSortCodeType",
            valueMap:["ItemCount", "ProductCount", "Alphabetical", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SellerExpressEligible:{name:"SellerExpressEligible", type:"boolean", xmlRequired:false},
                ExpressOptOut:{name:"ExpressOptOut", type:"boolean", xmlRequired:false},
                ExpressApproved:{name:"ExpressApproved", type:"boolean", xmlRequired:false},
                ExpressEligibleListingType:{name:"ExpressEligibleListingType", type:"boolean", xmlRequired:false},
                ExpressEnabledCategory:{name:"ExpressEnabledCategory", type:"boolean", xmlRequired:false},
                EligiblePayPalAccount:{name:"EligiblePayPalAccount", type:"boolean", xmlRequired:false},
                DomesticShippingCost:{name:"DomesticShippingCost", type:"boolean", xmlRequired:false},
                EligibleReturnPolicy:{name:"EligibleReturnPolicy", type:"boolean", xmlRequired:false},
                Picture:{name:"Picture", type:"boolean", xmlRequired:false},
                EligibleItemCondition:{name:"EligibleItemCondition", type:"boolean", xmlRequired:false},
                PriceAboveMinimum:{name:"PriceAboveMinimum", type:"boolean", xmlRequired:false},
                PriceBelowMaximum:{name:"PriceBelowMaximum", type:"boolean", xmlRequired:false},
                EligibleCheckout:{name:"EligibleCheckout", type:"boolean", xmlRequired:false},
                NoPreapprovedBidderList:{name:"NoPreapprovedBidderList", type:"boolean", xmlRequired:false},
                NoCharity:{name:"NoCharity", type:"boolean", xmlRequired:false},
                NoDigitalDelivery:{name:"NoDigitalDelivery", type:"boolean", xmlRequired:false},
                CombinedShippingDiscount:{name:"CombinedShippingDiscount", type:"boolean", xmlRequired:false},
                ShipFromEligibleCountry:{name:"ShipFromEligibleCountry", type:"boolean", xmlRequired:false},
                PayPalAccountAcceptsUnconfirmedAddress:{name:"PayPalAccountAcceptsUnconfirmedAddress", type:"boolean", 
                                                        xmlRequired:false}
            },
            ID:"ExpressItemRequirementsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExpressItemSortCodeType",
            valueMap:["LowestTotalCost", "HighestTotalCost", "Relevance", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ExpressPicturesRequiredDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ExpressSellingPreference:{name:"ExpressSellingPreference", type:"ExpressSellingPreferenceCodeType", 
                                          xmlRequired:false},
                DefaultPayPalAccount:{name:"DefaultPayPalAccount", type:"string", xmlRequired:false}
            },
            ID:"ExpressPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExpressProductSortCodeType",
            valueMap:["LowestPrice", "HighestPrice", "SalesRank", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Title:{name:"Title", type:"string", xmlRequired:false},
                MinPrice:{name:"MinPrice", type:"AmountType", xmlRequired:false},
                MaxPrice:{name:"MaxPrice", type:"AmountType", xmlRequired:false},
                StockPhotoURL:{name:"StockPhotoURL", type:"anyURI", xmlRequired:false},
                ItemCount:{name:"ItemCount", type:"int", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false},
                ProductReferenceID:{name:"ProductReferenceID", type:"long", xmlRequired:false},
                ItemSpecifics:{name:"ItemSpecifics", type:"NameValueListArrayType", xmlRequired:false}
            },
            ID:"ExpressProductType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ExpressSellingPreference:{name:"ExpressSellingPreference", type:"boolean", xmlRequired:false},
                ExpressApproved:{name:"ExpressApproved", type:"boolean", xmlRequired:false},
                GoodStanding:{name:"GoodStanding", type:"boolean", xmlRequired:false},
                FeedbackScore:{name:"FeedbackScore", type:"FeedbackRequirementsType", xmlRequired:false},
                PositiveFeedbackPercent:{name:"PositiveFeedbackPercent", type:"FeedbackRequirementsType", 
                                         xmlRequired:false},
                FeedbackAsSellerScore:{name:"FeedbackAsSellerScore", type:"FeedbackRequirementsType", 
                                       xmlRequired:false},
                PositiveFeedbackAsSellerPercent:{name:"PositiveFeedbackAsSellerPercent", type:"FeedbackRequirementsType", 
                                                 xmlRequired:false},
                BusinessSeller:{name:"BusinessSeller", type:"boolean", xmlRequired:false},
                EligiblePayPalAccount:{name:"EligiblePayPalAccount", type:"boolean", xmlRequired:false},
                PayPalAccountAcceptsUnconfirmedAddress:{name:"PayPalAccountAcceptsUnconfirmedAddress", type:"boolean", 
                                                        xmlRequired:false},
                CombinedPaymentsAccepted:{name:"CombinedPaymentsAccepted", type:"boolean", xmlRequired:false},
                FeedbackPublic:{name:"FeedbackPublic", type:"boolean", xmlRequired:false}
            },
            ID:"ExpressSellerRequirementsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExpressSellingPreferenceCodeType",
            valueMap:["All", "ExpressOnly", "OptOut", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ContactHoursDetails:{name:"ContactHoursDetails", type:"ContactHoursDetailsType", xmlRequired:false},
                ClassifiedAdContactByEmailEnabled:{name:"ClassifiedAdContactByEmailEnabled", type:"boolean", xmlRequired:false},
                PayPerLeadPhoneNumber:{name:"PayPerLeadPhoneNumber", type:"string", xmlRequired:false}
            },
            ID:"ExtendedContactDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ProductFinderID:{name:"ProductFinderID", type:"int", xmlRequired:false},
                ProductFinderBuySide:{name:"ProductFinderBuySide", type:"boolean", xmlRequired:false}
            },
            ID:"ExtendedProductFinderIDType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ExternalAlertID:{name:"ExternalAlertID", type:"string", xmlRequired:false}
            },
            ID:"ExternalAlertIDArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ExternalProductCodeType",
            valueMap:["ISBN", "UPC", "ProductID", "EAN", "Keywords", "MPN", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Value:{name:"Value", type:"string", xmlRequired:false},
                ReturnSearchResultOnDuplicates:{name:"ReturnSearchResultOnDuplicates", type:"boolean", xmlRequired:false},
                Type:{name:"Type", type:"ExternalProductCodeType", xmlRequired:false},
                AlternateValue:{name:"AlternateValue", type:"string", xmlRequired:false}
            },
            ID:"ExternalProductIDType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ExternalTransactionID:{name:"ExternalTransactionID", type:"string", xmlRequired:false},
                ExternalTransactionTime:{name:"ExternalTransactionTime", type:"dateTime", xmlRequired:false},
                FeeOrCreditAmount:{name:"FeeOrCreditAmount", type:"AmountType", xmlRequired:false},
                PaymentOrRefundAmount:{name:"PaymentOrRefundAmount", type:"AmountType", xmlRequired:false}
            },
            ID:"ExternalTransactionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingDurations:{name:"ListingDurations", type:"ListingDurationDefinitionsType", 
                                  xmlRequired:false},
                ShippingTermsRequired:{name:"ShippingTermsRequired", type:"ShippingTermRequiredDefinitionType", 
                                       xmlRequired:false},
                BestOfferEnabled:{name:"BestOfferEnabled", type:"BestOfferEnabledDefinitionType", 
                                  xmlRequired:false},
                DutchBINEnabled:{name:"DutchBINEnabled", type:"DutchBINEnabledDefinitionType", xmlRequired:false},
                UserConsentRequired:{name:"UserConsentRequired", type:"UserConsentRequiredDefinitionType", 
                                     xmlRequired:false},
                HomePageFeaturedEnabled:{name:"HomePageFeaturedEnabled", type:"HomePageFeaturedEnabledDefinitionType", 
                                         xmlRequired:false},
                ProPackEnabled:{name:"ProPackEnabled", type:"ProPackEnabledDefinitionType", xmlRequired:false},
                BasicUpgradePackEnabled:{name:"BasicUpgradePackEnabled", type:"BasicUpgradePackEnabledDefinitionType", 
                                         xmlRequired:false},
                ValuePackEnabled:{name:"ValuePackEnabled", type:"ValuePackEnabledDefinitionType", 
                                  xmlRequired:false},
                ProPackPlusEnabled:{name:"ProPackPlusEnabled", type:"ProPackPlusEnabledDefinitionType", 
                                    xmlRequired:false},
                AdFormatEnabled:{name:"AdFormatEnabled", type:"AdFormatEnabledDefinitionType", xmlRequired:false},
                DigitalDeliveryEnabled:{name:"DigitalDeliveryEnabled", type:"DigitalDeliveryEnabledDefinitionType", 
                                        xmlRequired:false},
                BestOfferCounterEnabled:{name:"BestOfferCounterEnabled", type:"BestOfferCounterEnabledDefinitionType", 
                                         xmlRequired:false},
                BestOfferAutoDeclineEnabled:{name:"BestOfferAutoDeclineEnabled", 
                                             type:"BestOfferAutoDeclineEnabledDefinitionType",xmlRequired:false},
                LocalMarketSpecialitySubscription:{name:"LocalMarketSpecialitySubscription", 
                                                   type:"LocalMarketSpecialitySubscriptionDefinitionType",xmlRequired:false},
                LocalMarketRegularSubscription:{name:"LocalMarketRegularSubscription", 
                                                type:"LocalMarketRegularSubscriptionDefinitionType",xmlRequired:false},
                LocalMarketPremiumSubscription:{name:"LocalMarketPremiumSubscription", 
                                                type:"LocalMarketPremiumSubscriptionDefinitionType",xmlRequired:false},
                LocalMarketNonSubscription:{name:"LocalMarketNonSubscription", 
                                            type:"LocalMarketNonSubscriptionDefinitionType",xmlRequired:false},
                ExpressEnabled:{name:"ExpressEnabled", type:"ExpressEnabledDefinitionType", xmlRequired:false},
                ExpressPicturesRequired:{name:"ExpressPicturesRequired", type:"ExpressPicturesRequiredDefinitionType", 
                                         xmlRequired:false},
                ExpressConditionRequired:{name:"ExpressConditionRequired", type:"ExpressConditionRequiredDefinitionType", 
                                          xmlRequired:false},
                MinimumReservePrice:{name:"MinimumReservePrice", type:"MinimumReservePriceDefinitionType", 
                                     xmlRequired:false},
                TransactionConfirmationRequestEnabled:{name:"TransactionConfirmationRequestEnabled", type:"TCREnabledDefinitionType", 
                                                       xmlRequired:false},
                SellerContactDetailsEnabled:{name:"SellerContactDetailsEnabled", 
                                             type:"SellerContactDetailsEnabledDefinitionType",xmlRequired:false},
                StoreInventoryEnabled:{name:"StoreInventoryEnabled", type:"StoreInventoryEnabledDefinitionType", 
                                       xmlRequired:false},
                SkypeMeTransactionalEnabled:{name:"SkypeMeTransactionalEnabled", 
                                             type:"SkypeMeTransactionalEnabledDefinitionType",xmlRequired:false},
                SkypeMeNonTransactionalEnabled:{name:"SkypeMeNonTransactionalEnabled", 
                                                type:"SkypeMeNonTransactionalEnabledDefinitionType",xmlRequired:false},
                LocalListingDistancesRegular:{name:"LocalListingDistancesRegular", 
                                              type:"LocalListingDistancesRegularDefinitionType",xmlRequired:false},
                LocalListingDistancesSpecialty:{name:"LocalListingDistancesSpecialty", 
                                                type:"LocalListingDistancesSpecialtyDefinitionType",xmlRequired:false},
                LocalListingDistancesNonSubscription:{name:"LocalListingDistancesNonSubscription", 
                                                      type:"LocalListingDistancesNonSubscriptionDefinitionType",xmlRequired:false},
                ClassifiedAdPaymentMethodEnabled:{name:"ClassifiedAdPaymentMethodEnabled", 
                                                  type:"ClassifiedAdPaymentMethodEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdShippingMethodEnabled:{name:"ClassifiedAdShippingMethodEnabled", 
                                                   type:"ClassifiedAdShippingMethodEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdBestOfferEnabled:{name:"ClassifiedAdBestOfferEnabled", 
                                              type:"ClassifiedAdBestOfferEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdCounterOfferEnabled:{name:"ClassifiedAdCounterOfferEnabled", 
                                                 type:"ClassifiedAdCounterOfferEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdAutoDeclineEnabled:{name:"ClassifiedAdAutoDeclineEnabled", 
                                                type:"ClassifiedAdAutoDeclineEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdContactByPhoneEnabled:{name:"ClassifiedAdContactByPhoneEnabled", 
                                                   type:"ClassifiedAdContactByPhoneEnabledDefinitionType",xmlRequired:false},
                ClassifiedAdContactByEmailEnabled:{name:"ClassifiedAdContactByEmailEnabled", 
                                                   type:"ClassifiedAdContactByEmailEnabledDefintionType",xmlRequired:false},
                SafePaymentRequired:{name:"SafePaymentRequired", type:"SafePaymentRequiredDefinitionType", 
                                     xmlRequired:false},
                ClassifiedAdPayPerLeadEnabled:{name:"ClassifiedAdPayPerLeadEnabled", 
                                               type:"ClassifiedAdPayPerLeadEnabledDefinitionType",xmlRequired:false}
            },
            ID:"FeatureDefinitionsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FeatureIDCodeType",
            valueMap:["ListingDurations", "BestOfferEnabled", "DutchBINEnabled", "ShippingTermsRequired", 
                      "UserConsentRequired","HomePageFeaturedEnabled", "AdFormatEnabled", "DigitalDeliveryEnabled", 
                      "BestOfferCounterEnabled","BestOfferAutoDeclineEnabled", "ProPack", "BasicUpgradePack", "ValuePack", 
                      "ProPackPlus","LocalMarketSpecialitySubscription", "LocalMarketRegularSubscription", 
                      "LocalMarketPremiumSubscription","LocalMarketNonSubscription", "ExpressEnabled", "ExpressPicturesRequired", 
                      "ExpressConditionRequired","SellerContactDetailsEnabled", "CustomCode", "MinimumReservePrice", 
                      "TransactionConfirmationRequestEnabled","StoreInventoryEnabled", "LocalListingDistances", 
                      "SkypeMeTransactionalEnabled","SkypeMeNonTransactionalEnabled", "ClassifiedAdPaymentMethodEnabled", 
                      "ClassifiedAdShippingMethodEnabled","ClassifiedAdBestOfferEnabled", "ClassifiedAdCounterOfferEnabled", 
                      "ClassifiedAdAutoDeclineEnabled","ClassifiedAdContactByEmailEnabled", "ClassifiedAdContactByPhoneEnabled", 
                      "SafePaymentRequired","MaximumBestOffersAllowed", "ClassifiedAdMaximumBestOffersAllowed", 
                      "ClassifiedAdContactByEmailAvailable","ClassifiedAdPayPerLeadEnabled"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                Fee:{name:"Fee", type:"AmountType", xmlRequired:false}
            },
            ID:"FeeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                FeedbackDetail:{name:"FeedbackDetail", type:"FeedbackDetailType", xmlRequired:false}
            },
            ID:"FeedbackDetailArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CommentingUser:{name:"CommentingUser", type:"UserIDType", xmlRequired:false},
                CommentingUserScore:{name:"CommentingUserScore", type:"int", xmlRequired:false},
                CommentText:{name:"CommentText", type:"string", xmlRequired:false},
                CommentTime:{name:"CommentTime", type:"dateTime", xmlRequired:false},
                CommentType:{name:"CommentType", type:"CommentTypeCodeType", xmlRequired:false},
                FeedbackResponse:{name:"FeedbackResponse", type:"string", xmlRequired:false},
                Followup:{name:"Followup", type:"string", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                Role:{name:"Role", type:"TradingRoleCodeType", xmlRequired:false},
                ItemTitle:{name:"ItemTitle", type:"string", xmlRequired:false},
                ItemPrice:{name:"ItemPrice", type:"AmountType", xmlRequired:false},
                FeedbackID:{name:"FeedbackID", type:"string", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                CommentReplaced:{name:"CommentReplaced", type:"boolean", xmlRequired:false},
                ResponseReplaced:{name:"ResponseReplaced", type:"boolean", xmlRequired:false},
                FollowUpReplaced:{name:"FollowUpReplaced", type:"boolean", xmlRequired:false},
                Countable:{name:"Countable", type:"boolean", xmlRequired:false}
            },
            ID:"FeedbackDetailType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CommentText:{name:"CommentText", type:"string", xmlRequired:false},
                CommentType:{name:"CommentType", type:"CommentTypeCodeType", xmlRequired:false},
                TargetUser:{name:"TargetUser", type:"UserIDType", xmlRequired:false}
            },
            ID:"FeedbackInfoType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                FeedbackPeriod:{name:"FeedbackPeriod", type:"FeedbackPeriodType", xmlRequired:false}
            },
            ID:"FeedbackPeriodArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PeriodInDays:{name:"PeriodInDays", type:"int", xmlRequired:false},
                Count:{name:"Count", type:"int", xmlRequired:false}
            },
            ID:"FeedbackPeriodType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FeedbackRatingDetailCodeType",
            valueMap:["ItemAsDescribed", "Communication", "ShippingTime", "ShippingAndHandlingCharges", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FeedbackRatingStarCodeType",
            valueMap:["None", "Yellow", "Blue", "Turquoise", "Purple", "Red", "Green", "YellowShooting", 
                      "TurquoiseShooting","PurpleShooting", "RedShooting", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                minimum:{name:"minimum", type:"string", xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"boolean", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"FeedbackRequirementsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FeedbackResponseCodeType",
            valueMap:["Reply", "FollowUp"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BidRetractionFeedbackPeriodArray:{name:"BidRetractionFeedbackPeriodArray", type:"FeedbackPeriodArrayType", 
                                                  xmlRequired:false},
                NegativeFeedbackPeriodArray:{name:"NegativeFeedbackPeriodArray", type:"FeedbackPeriodArrayType", 
                                             xmlRequired:false},
                NeutralFeedbackPeriodArray:{name:"NeutralFeedbackPeriodArray", type:"FeedbackPeriodArrayType", 
                                            xmlRequired:false},
                PositiveFeedbackPeriodArray:{name:"PositiveFeedbackPeriodArray", type:"FeedbackPeriodArrayType", 
                                             xmlRequired:false},
                TotalFeedbackPeriodArray:{name:"TotalFeedbackPeriodArray", type:"FeedbackPeriodArrayType", 
                                          xmlRequired:false},
                NeutralCommentCountFromSuspendedUsers:{name:"NeutralCommentCountFromSuspendedUsers", type:"int", xmlRequired:false},
                UniqueNegativeFeedbackCount:{name:"UniqueNegativeFeedbackCount", type:"int", xmlRequired:false},
                UniquePositiveFeedbackCount:{name:"UniquePositiveFeedbackCount", type:"int", xmlRequired:false},
                SellerAverageRatingDetailArray:{name:"SellerAverageRatingDetailArray", type:"AverageRatingDetailArrayType", 
                                                xmlRequired:false}
            },
            ID:"FeedbackSummaryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Fee:{name:"Fee", type:"FeeType", xmlRequired:false}
            },
            ID:"FeesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                FinanceOffer:{name:"FinanceOffer", type:"FinanceOfferType", xmlRequired:false}
            },
            ID:"FinanceOfferArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FinanceOfferID:{name:"FinanceOfferID", type:"string", xmlRequired:false},
                BuyerTerms:{name:"BuyerTerms", type:"string", xmlRequired:false},
                SellerTerms:{name:"SellerTerms", type:"string", xmlRequired:false},
                StartDate:{name:"StartDate", type:"dateTime", xmlRequired:false},
                LastModifiedDate:{name:"LastModifiedDate", type:"dateTime", xmlRequired:false},
                MinimumAmount:{name:"MinimumAmount", type:"AmountType", xmlRequired:false},
                RateFactor:{name:"RateFactor", type:"double", xmlRequired:true},
                Priority:{name:"Priority", type:"int", xmlRequired:true}
            },
            ID:"FinanceOfferType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FlatRateInsuranceRangeCodeType",
            valueMap:["FlatRateInsuranceRange1", "FlatRateInsuranceRange2", "FlatRateInsuranceRange3", 
                      "FlatRateInsuranceRange4","FlatRateInsuranceRange5", "FlatRateInsuranceRange6", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FlatRateInsuranceRange:{name:"FlatRateInsuranceRange", type:"FlatRateInsuranceRangeCodeType", 
                                        xmlRequired:false},
                InsuranceCost:{name:"InsuranceCost", type:"AmountType", xmlRequired:false}
            },
            ID:"FlatRateInsuranceRangeCostType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DiscountName:{name:"DiscountName", type:"DiscountNameCodeType", xmlRequired:false},
                DiscountProfile:{name:"DiscountProfile", type:"DiscountProfileType", xmlRequired:false}
            },
            ID:"FlatShippingDiscountType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AmountPerAdditionalItem:{name:"AmountPerAdditionalItem", type:"AmountType", xmlRequired:false},
                DeductionAmountPerAdditionalItem:{name:"DeductionAmountPerAdditionalItem", type:"AmountType", xmlRequired:false},
                FlatRateInsuranceRangeCost:{name:"FlatRateInsuranceRangeCost", type:"FlatRateInsuranceRangeCostType", 
                                            xmlRequired:false},
                FlatShippingRateOption:{name:"FlatShippingRateOption", type:"FlatShippingRateOptionCodeType", 
                                        xmlRequired:false},
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false}
            },
            ID:"FlatShippingPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"FlatShippingRateOptionCodeType",
            valueMap:["ChargeAmountForEachAdditionalItem", "DeductAmountFromEachAdditionalItem", 
                      "ShipAdditionalItemsFree","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GallerySortFilterCodeType",
            valueMap:["ShowAnyItems", "ShowItemsWithGalleryImagesFirst", "ShowOnlyItemsWithGalleryImages", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GalleryTypeCodeType",
            valueMap:["None", "Featured", "Gallery", "Plus", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GeneralPaymentMethodCodeType",
            valueMap:["Other", "Echeck", "ACH", "Creditcard", "PayPalBalance", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GetAllBiddersModeCodeType",
            valueMap:["ViewAll", "EndedListing", "SecondChanceEligibleEndedListing", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingFlow:{name:"ListingFlow", type:"ListingFlowCodeType", xmlRequired:false},
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                RecommendationEngine:{name:"RecommendationEngine", type:"RecommendationEngineCodeType", 
                                      xmlRequired:false},
                Query:{name:"Query", type:"string", xmlRequired:false},
                CorrelationID:{name:"CorrelationID", type:"string", xmlRequired:false},
                DeletedField:{name:"DeletedField", type:"string", xmlRequired:false}
            },
            ID:"GetRecommendationsRequestContainerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingAnalyzerRecommendations:{name:"ListingAnalyzerRecommendations", type:"ListingAnalyzerRecommendationsType", 
                                                xmlRequired:false},
                SIFFTASRecommendations:{name:"SIFFTASRecommendations", type:"SIFFTASRecommendationsType", 
                                        xmlRequired:false},
                PricingRecommendations:{name:"PricingRecommendations", type:"PricingRecommendationsType", 
                                        xmlRequired:false},
                AttributeRecommendations:{name:"AttributeRecommendations", type:"AttributeRecommendationsType", 
                                          xmlRequired:false},
                ProductRecommendations:{name:"ProductRecommendations", type:"ProductRecommendationsType", 
                                        xmlRequired:false},
                CorrelationID:{name:"CorrelationID", type:"string", xmlRequired:false}
            },
            ID:"GetRecommendationsResponseContainerType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GiftServicesCodeType",
            valueMap:["GiftExpressShipping", "GiftShipToRecipient", "GiftWrap", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"GranularityLevelCodeType",
            valueMap:["Coarse", "Fine", "Medium"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MaxGroups:{name:"MaxGroups", type:"int", xmlRequired:false},
                MaxEntriesPerGroup:{name:"MaxEntriesPerGroup", type:"int", xmlRequired:false}
            },
            ID:"GroupType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"HandlingNameCodeType",
            valueMap:["EachAdditionalAmount", "EachAdditionalAmountOff", "EachAdditionalPercentOff", 
                      "IndividualHandlingFee","CombinedHandlingFee", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                id:{name:"id", type:"string", xmlAttribute:true},
                name:{name:"name", type:"string", xmlAttribute:true},
                Count:{name:"Count", type:"int", xmlRequired:false}
            },
            ID:"HistogramEntryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"HitCounterCodeType",
            valueMap:["NoHitCounter", "HonestyStyle", "GreenLED", "Hidden", "BasicStyle", "RetroStyle", 
                      "HiddenStyle","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"HomePageFeaturedEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                InsuranceFee:{name:"InsuranceFee", type:"AmountType", xmlRequired:false},
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false}
            },
            ID:"InsuranceDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"InsuranceOptionCodeType",
            valueMap:["Optional", "Required", "NotOffered", "IncludedInShippingHandling", "NotOfferedOnSite", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"InsuranceSelectedCodeType",
            valueMap:["NotOffered", "OfferedNotSelected", "OfferedSelected", "Required", 
                      "IncludedInShippingHandling","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ShippingService:{name:"ShippingService", type:"token", xmlRequired:false},
                ShippingServiceCost:{name:"ShippingServiceCost", type:"AmountType", xmlRequired:false},
                ShippingServiceAdditionalCost:{name:"ShippingServiceAdditionalCost", type:"AmountType", xmlRequired:false},
                ShippingServicePriority:{name:"ShippingServicePriority", type:"int", xmlRequired:false},
                ShipToLocation:{name:"ShipToLocation", type:"string", xmlRequired:false},
                ShippingInsuranceCost:{name:"ShippingInsuranceCost", type:"AmountType", xmlRequired:false}
            },
            ID:"InternationalShippingServiceOptionsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false}
            },
            ID:"ItemArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                BidCount:{name:"BidCount", type:"int", xmlRequired:false},
                SellerID:{name:"SellerID", type:"UserIDType", xmlRequired:false},
                LastBidTime:{name:"LastBidTime", type:"dateTime", xmlRequired:false}
            },
            ID:"ItemBidDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemConditionCodeType",
            valueMap:["New", "Used", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemFormatSortFilterCodeType",
            valueMap:["ShowAnyItems", "ShowItemsWithBINFirst", "ShowOnlyItemsWithBIN", "ShowOnlyStoreItems", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"ItemIDArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"ItemIDType"})
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Include:{name:"Include", type:"boolean", xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false},
                Sort:{name:"Sort", type:"ItemSortTypeCodeType", xmlRequired:false},
                DurationInDays:{name:"DurationInDays", type:"int", xmlRequired:false},
                IncludeNotes:{name:"IncludeNotes", type:"boolean", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false}
            },
            ID:"ItemListCustomizationType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemLocationCodeType",
            valueMap:["ItemAvailableIn", "ItemLocatedIn", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ItemRatingDetails:{name:"ItemRatingDetails", type:"ItemRatingDetailsType", xmlRequired:false}
            },
            ID:"ItemRatingDetailArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RatingDetail:{name:"RatingDetail", type:"FeedbackRatingDetailCodeType", xmlRequired:false},
                Rating:{name:"Rating", type:"int", xmlRequired:false}
            },
            ID:"ItemRatingDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemSortFilterCodeType",
            valueMap:["EndingLast", "EndingSoonest", "HighestPrice", "LowestPrice", "NewlyListed", 
                      "RandomlySelected","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemSortTypeCodeType",
            valueMap:["ItemID", "Price", "StartPrice", "Title", "BidCount", "Quantity", "StartTime", 
                      "EndTime","SellerUserID", "TimeLeft", "ListingDuration", "ListingType", "CurrentPrice", 
                      "ReservePrice","MaxBid", "BidderCount", "HighBidderUserID", "BuyerUserID", "BuyerPostalCode", 
                      "BuyerEmail","SellerEmail", "TotalPrice", "WatchCount", "BestOfferCount", "QuestionCount", 
                      "ShippingServiceCost","FeedbackReceived", "FeedbackLeft", "UserID", "QuantitySold", "BestOffer", 
                      "QuantityAvailable","QuantityPurchased", "WonPlatform", "SoldPlatform", 
                      "ListingDurationDescending","ListingTypeDescending", "CurrentPriceDescending", "ReservePriceDescending", 
                      "MaxBidDescending","BidderCountDescending", "HighBidderUserIDDescending", 
                      "BuyerUserIDDescending","BuyerPostalCodeDescending", "BuyerEmailDescending", "SellerEmailDescending", 
                      "TotalPriceDescending","WatchCountDescending", "QuestionCountDescending", 
                      "ShippingServiceCostDescending","FeedbackReceivedDescending", "FeedbackLeftDescending", "UserIDDescending", 
                      "QuantitySoldDescending","BestOfferCountDescending", "QuantityAvailableDescending", 
                      "QuantityPurchasedDescending","BestOfferDescending", "ItemIDDescending", "PriceDescending", 
                      "StartPriceDescending","TitleDescending", "BidCountDescending", "QuantityDescending", 
                      "StartTimeDescending","EndTimeDescending", "SellerUserIDDescending", "TimeLeftDescending", 
                      "WonPlatformDescending","SoldPlatformDescending", "LeadCount", "NewLeadCount", "LeadCountDescending", 
                      "NewLeadCountDescending","ClassifiedAdPayPerLeadFee", "ClassifiedAdPayPerLeadFeeDescending", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                TotalQuantity:{name:"TotalQuantity", type:"long", xmlRequired:false},
                TotalValue:{name:"TotalValue", type:"AmountType", xmlRequired:false}
            },
            ID:"ItemTotalsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ItemTransactionID:{name:"ItemTransactionID", type:"ItemTransactionIDType", xmlRequired:false}
            },
            ID:"ItemTransactionIDArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false}
            },
            ID:"ItemTransactionIDType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ApplicationData:{name:"ApplicationData", type:"string", xmlRequired:false},
                AttributeSetArray:{name:"AttributeSetArray", type:"AttributeSetArrayType", xmlRequired:false},
                AttributeArray:{name:"AttributeArray", type:"AttributeArrayType", xmlRequired:false},
                LookupAttributeArray:{name:"LookupAttributeArray", type:"LookupAttributeArrayType", xmlRequired:false},
                ApplyShippingDiscount:{name:"ApplyShippingDiscount", type:"boolean", xmlRequired:false},
                AutoPay:{name:"AutoPay", type:"boolean", xmlRequired:false},
                PaymentDetails:{name:"PaymentDetails", type:"PaymentDetailsType", xmlRequired:false},
                BiddingDetails:{name:"BiddingDetails", type:"BiddingDetailsType", xmlRequired:false},
                MotorsGermanySearchable:{name:"MotorsGermanySearchable", type:"boolean", xmlRequired:false},
                BuyerProtection:{name:"BuyerProtection", type:"BuyerProtectionCodeType", xmlRequired:false},
                BuyItNowPrice:{name:"BuyItNowPrice", type:"AmountType", xmlRequired:false},
                CategoryMappingAllowed:{name:"CategoryMappingAllowed", type:"boolean", xmlRequired:false},
                Charity:{name:"Charity", type:"CharityType", xmlRequired:false},
                Country:{name:"Country", type:"CountryCodeType", xmlRequired:false},
                CrossPromotion:{name:"CrossPromotion", type:"CrossPromotionsType", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false},
                DescriptionReviseMode:{name:"DescriptionReviseMode", type:"DescriptionReviseModeCodeType", 
                                       xmlRequired:false},
                Distance:{name:"Distance", type:"DistanceType", xmlRequired:false},
                FinanceOfferID:{name:"FinanceOfferID", type:"string", xmlRequired:false},
                GiftIcon:{name:"GiftIcon", type:"int", xmlRequired:false},
                GiftServices:{name:"GiftServices", type:"GiftServicesCodeType", xmlRequired:false},
                HitCounter:{name:"HitCounter", type:"HitCounterCodeType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                ListingDetails:{name:"ListingDetails", type:"ListingDetailsType", xmlRequired:false},
                ListingDesigner:{name:"ListingDesigner", type:"ListingDesignerType", xmlRequired:false},
                ListingDuration:{name:"ListingDuration", type:"token", xmlRequired:false},
                ListingEnhancement:{name:"ListingEnhancement", type:"ListingEnhancementsCodeType", 
                                    xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false},
                ListingSubtype:{name:"ListingSubtype", type:"ListingSubtypeEnum", xmlRequired:false},
                Location:{name:"Location", type:"string", xmlRequired:false},
                LotSize:{name:"LotSize", type:"int", xmlRequired:false},
                NowAndNew:{name:"NowAndNew", type:"boolean", xmlRequired:false},
                PartnerCode:{name:"PartnerCode", type:"string", xmlRequired:false},
                PartnerName:{name:"PartnerName", type:"string", xmlRequired:false},
                PaymentMethods:{name:"PaymentMethods", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                PayPalEmailAddress:{name:"PayPalEmailAddress", type:"string", xmlRequired:false},
                PrimaryCategory:{name:"PrimaryCategory", type:"CategoryType", xmlRequired:false},
                PrivateListing:{name:"PrivateListing", type:"boolean", xmlRequired:false},
                ProductListingDetails:{name:"ProductListingDetails", type:"ProductListingDetailsType", 
                                       xmlRequired:false},
                Quantity:{name:"Quantity", type:"int", xmlRequired:false},
                PrivateNotes:{name:"PrivateNotes", type:"string", xmlRequired:false},
                RegionID:{name:"RegionID", type:"string", xmlRequired:false},
                RelistLink:{name:"RelistLink", type:"boolean", xmlRequired:false},
                ReservePrice:{name:"ReservePrice", type:"AmountType", xmlRequired:false},
                ReviseStatus:{name:"ReviseStatus", type:"ReviseStatusType", xmlRequired:false},
                ScheduleTime:{name:"ScheduleTime", type:"dateTime", xmlRequired:false},
                SecondaryCategory:{name:"SecondaryCategory", type:"CategoryType", xmlRequired:false},
                FreeAddedCategory:{name:"FreeAddedCategory", type:"CategoryType", xmlRequired:false},
                Seller:{name:"Seller", type:"UserType", xmlRequired:false},
                SellingStatus:{name:"SellingStatus", type:"SellingStatusType", xmlRequired:false},
                ShippingDetails:{name:"ShippingDetails", type:"ShippingDetailsType", xmlRequired:false},
                ShipToLocations:{name:"ShipToLocations", type:"string", xmlRequired:false},
                Site:{name:"Site", type:"SiteCodeType", xmlRequired:false},
                StartPrice:{name:"StartPrice", type:"AmountType", xmlRequired:false},
                Storefront:{name:"Storefront", type:"StorefrontType", xmlRequired:false},
                SubTitle:{name:"SubTitle", type:"string", xmlRequired:false},
                TimeLeft:{name:"TimeLeft", type:"duration", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false},
                UUID:{name:"UUID", type:"UUIDType", xmlRequired:false},
                VATDetails:{name:"VATDetails", type:"VATDetailsType", xmlRequired:false},
                SellerVacationNote:{name:"SellerVacationNote", type:"string", xmlRequired:false},
                WatchCount:{name:"WatchCount", type:"long", xmlRequired:false},
                HitCount:{name:"HitCount", type:"long", xmlRequired:false},
                DisableBuyerRequirements:{name:"DisableBuyerRequirements", type:"boolean", xmlRequired:false},
                BuyerRequirements:{name:"BuyerRequirements", type:"BuyerRequirementsType", xmlRequired:false},
                BestOfferDetails:{name:"BestOfferDetails", type:"BestOfferDetailsType", xmlRequired:false},
                LiveAuctionDetails:{name:"LiveAuctionDetails", type:"LiveAuctionDetailsType", xmlRequired:false},
                LocationDefaulted:{name:"LocationDefaulted", type:"boolean", xmlRequired:false},
                ThirdPartyCheckout:{name:"ThirdPartyCheckout", type:"boolean", xmlRequired:false},
                UseTaxTable:{name:"UseTaxTable", type:"boolean", xmlRequired:false},
                GetItFast:{name:"GetItFast", type:"boolean", xmlRequired:false},
                BuyerResponsibleForShipping:{name:"BuyerResponsibleForShipping", type:"boolean", xmlRequired:false},
                LimitedWarrantyEligible:{name:"LimitedWarrantyEligible", type:"boolean", xmlRequired:false},
                eBayNotes:{name:"eBayNotes", type:"string", xmlRequired:false},
                QuestionCount:{name:"QuestionCount", type:"long", xmlRequired:false},
                Relisted:{name:"Relisted", type:"boolean", xmlRequired:false},
                QuantityAvailable:{name:"QuantityAvailable", type:"int", xmlRequired:false},
                SKU:{name:"SKU", type:"SKUType", xmlRequired:false},
                CategoryBasedAttributesPrefill:{name:"CategoryBasedAttributesPrefill", type:"boolean", xmlRequired:false},
                SearchDetails:{name:"SearchDetails", type:"SearchDetailsType", xmlRequired:false},
                PostalCode:{name:"PostalCode", type:"string", xmlRequired:false},
                ShippingTermsInDescription:{name:"ShippingTermsInDescription", type:"boolean", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false},
                SellerInventoryID:{name:"SellerInventoryID", type:"string", xmlRequired:false},
                PictureDetails:{name:"PictureDetails", type:"PictureDetailsType", xmlRequired:false},
                DigitalDeliveryDetails:{name:"DigitalDeliveryDetails", type:"DigitalDeliveryDetailsType", 
                                        xmlRequired:false},
                DispatchTimeMax:{name:"DispatchTimeMax", type:"int", xmlRequired:false},
                SkypeEnabled:{name:"SkypeEnabled", type:"boolean", xmlRequired:false},
                SkypeID:{name:"SkypeID", type:"string", xmlRequired:false},
                SkypeContactOption:{name:"SkypeContactOption", type:"SkypeContactOptionCodeType", xmlRequired:false},
                BestOfferEnabled:{name:"BestOfferEnabled", type:"boolean", xmlRequired:false},
                LocalListing:{name:"LocalListing", type:"boolean", xmlRequired:false},
                ThirdPartyCheckoutIntegration:{name:"ThirdPartyCheckoutIntegration", type:"boolean", xmlRequired:false},
                ExpressOptOut:{name:"ExpressOptOut", type:"boolean", xmlRequired:false},
                ListingCheckoutRedirectPreference:{name:"ListingCheckoutRedirectPreference", 
                                                   type:"ListingCheckoutRedirectPreferenceType",xmlRequired:false},
                ExpressDetails:{name:"ExpressDetails", type:"ExpressDetailsType", xmlRequired:false},
                SellerContactDetails:{name:"SellerContactDetails", type:"AddressType", xmlRequired:false},
                TotalQuestionCount:{name:"TotalQuestionCount", type:"long", xmlRequired:false},
                ProxyItem:{name:"ProxyItem", type:"boolean", xmlRequired:false},
                ExtendedSellerContactDetails:{name:"ExtendedSellerContactDetails", type:"ExtendedContactDetailsType", 
                                              xmlRequired:false},
                LeadCount:{name:"LeadCount", type:"int", xmlRequired:false},
                NewLeadCount:{name:"NewLeadCount", type:"int", xmlRequired:false},
                ItemSpecifics:{name:"ItemSpecifics", type:"NameValueListArrayType", xmlRequired:false},
                GroupCategoryID:{name:"GroupCategoryID", type:"string", xmlRequired:false},
                ClassifiedAdPayPerLeadFee:{name:"ClassifiedAdPayPerLeadFee", type:"AmountType", xmlRequired:false},
                BidGroupItem:{name:"BidGroupItem", type:"boolean", xmlRequired:false}
            },
            ID:"ItemType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ItemTypeFilterCodeType",
            valueMap:["AuctionItemsOnly", "FixedPricedItem", "AllItems", "StoreInventoryOnly", 
                      "FixedPriceExcludeStoreInventory","ExcludeStoreInventory", "AllItemTypes", "AllFixedPriceItemTypes", 
                      "CustomCode","ClassifiedItemsOnly"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                visible:{name:"visible", type:"boolean", xmlAttribute:true},
                Name:{name:"Name", type:"string", xmlRequired:false}
            },
            ID:"LabelType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingTipArray:{name:"ListingTipArray", type:"ListingTipArrayType", xmlRequired:false}
            },
            ID:"ListingAnalyzerRecommendationsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ProStoresStoreName:{name:"ProStoresStoreName", type:"string", xmlRequired:false},
                SellerThirdPartyUsername:{name:"SellerThirdPartyUsername", type:"string", xmlRequired:false}
            },
            ID:"ListingCheckoutRedirectPreferenceType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                LayoutID:{name:"LayoutID", type:"int", xmlRequired:false},
                OptimalPictureSize:{name:"OptimalPictureSize", type:"boolean", xmlRequired:false},
                ThemeID:{name:"ThemeID", type:"int", xmlRequired:false}
            },
            ID:"ListingDesignerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Adult:{name:"Adult", type:"boolean", xmlRequired:false},
                BindingAuction:{name:"BindingAuction", type:"boolean", xmlRequired:false},
                CheckoutEnabled:{name:"CheckoutEnabled", type:"boolean", xmlRequired:false},
                ConvertedBuyItNowPrice:{name:"ConvertedBuyItNowPrice", type:"AmountType", xmlRequired:false},
                ConvertedStartPrice:{name:"ConvertedStartPrice", type:"AmountType", xmlRequired:false},
                ConvertedReservePrice:{name:"ConvertedReservePrice", type:"AmountType", xmlRequired:false},
                HasReservePrice:{name:"HasReservePrice", type:"boolean", xmlRequired:false},
                RelistedItemID:{name:"RelistedItemID", type:"ItemIDType", xmlRequired:false},
                SecondChanceOriginalItemID:{name:"SecondChanceOriginalItemID", type:"ItemIDType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false},
                ViewItemURL:{name:"ViewItemURL", type:"anyURI", xmlRequired:false},
                HasUnansweredQuestions:{name:"HasUnansweredQuestions", type:"boolean", xmlRequired:false},
                HasPublicMessages:{name:"HasPublicMessages", type:"boolean", xmlRequired:false},
                BuyItNowAvailable:{name:"BuyItNowAvailable", type:"boolean", xmlRequired:false},
                SellerBusinessType:{name:"SellerBusinessType", type:"SellerBusinessCodeType", xmlRequired:false},
                MinimumBestOfferPrice:{name:"MinimumBestOfferPrice", type:"AmountType", xmlRequired:false},
                MinimumBestOfferMessage:{name:"MinimumBestOfferMessage", type:"string", xmlRequired:false},
                LocalListingDistance:{name:"LocalListingDistance", type:"string", xmlRequired:false},
                ExpressListing:{name:"ExpressListing", type:"boolean", xmlRequired:false},
                ExpressItemRequirements:{name:"ExpressItemRequirements", type:"ExpressItemRequirementsType", 
                                         xmlRequired:false},
                TCROriginalItemID:{name:"TCROriginalItemID", type:"ItemIDType", xmlRequired:false},
                ViewItemURLForNaturalSearch:{name:"ViewItemURLForNaturalSearch", type:"anyURI", xmlRequired:false},
                PayPerLeadEnabled:{name:"PayPerLeadEnabled", type:"boolean", xmlRequired:false}
            },
            ID:"ListingDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingDurationCodeType",
            valueMap:["Days_1", "Days_3", "Days_5", "Days_7", "Days_10", "Days_14", "Days_21", "Days_30", 
                      "Days_60","Days_90", "Days_120", "GTC", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                durationSetID:{name:"durationSetID", type:"int", xmlAttribute:true},
                Duration:{name:"Duration", type:"token", xmlRequired:false}
            },
            ID:"ListingDurationDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Version:{name:"Version", type:"int", xmlAttribute:true},
                ListingDuration:{name:"ListingDuration", type:"ListingDurationDefinitionType", xmlRequired:false}
            },
            ID:"ListingDurationDefinitionsType"
        })
,
        isc.XSComplexType.create({
            textContentProperty:"xmlTextContent",
            mustQualify:true,
            fields:{
                type:{name:"type", type:"ListingTypeCodeType", xmlAttribute:true},
                xmlTextContent:{name:"xmlTextContent", type:"int", xmlRequired:false}
            },
            xsdSimpleContent:true,
            ID:"ListingDurationReferenceType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingEnhancementsCodeType",
            valueMap:["Border", "BoldTitle", "Featured", "Highlight", "HomePageFeatured", "ProPackBundle", 
                      "BasicUpgradePackBundle","ValuePackBundle", "ProPackPlusBundle", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingFlowCodeType",
            valueMap:["AddItem", "ReviseItem", "RelistItem", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingStatusCodeType",
            valueMap:["Active", "Ended", "Completed", "CustomCode", "Custom"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingSubtypeEnum",
            valueMap:["ClassifiedAd"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ListingTip:{name:"ListingTip", type:"ListingTipType", xmlRequired:false}
            },
            ID:"ListingTipArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingTipFieldID:{name:"ListingTipFieldID", type:"string", xmlRequired:false},
                FieldTip:{name:"FieldTip", type:"string", xmlRequired:false},
                CurrentFieldText:{name:"CurrentFieldText", type:"string", xmlRequired:false},
                CurrentFieldValue:{name:"CurrentFieldValue", type:"string", xmlRequired:false}
            },
            ID:"ListingTipFieldType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingTipMessageID:{name:"ListingTipMessageID", type:"string", xmlRequired:false},
                ShortMessage:{name:"ShortMessage", type:"string", xmlRequired:false},
                LongMessage:{name:"LongMessage", type:"string", xmlRequired:false},
                HelpURLPath:{name:"HelpURLPath", type:"string", xmlRequired:false}
            },
            ID:"ListingTipMessageType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingTipID:{name:"ListingTipID", type:"string", xmlRequired:false},
                Priority:{name:"Priority", type:"int", xmlRequired:false},
                Message:{name:"Message", type:"ListingTipMessageType", xmlRequired:false},
                Field:{name:"Field", type:"ListingTipFieldType", xmlRequired:false}
            },
            ID:"ListingTipType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ListingTypeCodeType",
            valueMap:["Unknown", "Chinese", "Dutch", "Live", "Auction", "AdType", "StoresFixedPrice", 
                      "PersonalOffer","FixedPriceItem", "Half", "LeadGeneration", "Express", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                LiveAuctionStatus:{name:"LiveAuctionStatus", type:"LiveAuctionApprovalStatusType", 
                                   xmlRequired:false}
            },
            ID:"LiveAuctionApprovalStatusArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                Status:{name:"Status", type:"string", xmlRequired:false}
            },
            ID:"LiveAuctionApprovalStatusType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                LiveAuctionBid:{name:"LiveAuctionBid", type:"LiveAuctionBidType", xmlRequired:false}
            },
            ID:"LiveAuctionBidArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RequestedBiddingLimit:{name:"RequestedBiddingLimit", type:"AmountType", xmlRequired:false},
                BidderStatus:{name:"BidderStatus", type:"BidderStatusCodeType", xmlRequired:false},
                ApprovedBiddingLimit:{name:"ApprovedBiddingLimit", type:"AmountType", xmlRequired:false},
                DeclinedComment:{name:"DeclinedComment", type:"string", xmlRequired:false}
            },
            ID:"LiveAuctionBidType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserCatalogID:{name:"UserCatalogID", type:"int", xmlRequired:false},
                CatalogName:{name:"CatalogName", type:"string", xmlRequired:false},
                Schedule:{name:"Schedule", type:"ScheduleType", xmlRequired:false}
            },
            ID:"LiveAuctionCatalogType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserCatalogID:{name:"UserCatalogID", type:"int", xmlRequired:false},
                ScheduleID:{name:"ScheduleID", type:"int", xmlRequired:false},
                LotNumber:{name:"LotNumber", type:"string", xmlRequired:false},
                HighEstimate:{name:"HighEstimate", type:"AmountType", xmlRequired:false},
                LowEstimate:{name:"LowEstimate", type:"AmountType", xmlRequired:false}
            },
            ID:"LiveAuctionDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalListingDistancesNonSubscriptionDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalListingDistancesRegularDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalListingDistancesSpecialtyDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalMarketNonSubscriptionDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalMarketPremiumSubscriptionDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalMarketRegularSubscriptionDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"LocalMarketSpecialitySubscriptionDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MaxDistance:{name:"MaxDistance", type:"int", xmlRequired:true},
                PostalCode:{name:"PostalCode", type:"string", xmlRequired:true}
            },
            ID:"LocalSearchType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"LogoTypeCodeType",
            valueMap:["WinningBidderNotice", "Store", "Custom", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                LookupAttribute:{name:"LookupAttribute", type:"LookupAttributeType", xmlRequired:false}
            },
            ID:"LookupAttributeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                Value:{name:"Value", type:"string", xmlRequired:false}
            },
            ID:"LookupAttributeType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MailOptionsTypeCodeType",
            valueMap:["DoNotSendEmail", "EmailCopyToSender", "HideSenderEmailAddress", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Type:{name:"Type", type:"MarkUpMarkDownEventTypeCodeType", xmlRequired:false},
                Time:{name:"Time", type:"dateTime", xmlRequired:false},
                Reason:{name:"Reason", type:"string", xmlRequired:false}
            },
            ID:"MarkUpMarkDownEventType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MarkUpMarkDownEventTypeCodeType",
            valueMap:["MarkUp", "MarkDown", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                MarkUpMarkDownEvent:{name:"MarkUpMarkDownEvent", type:"MarkUpMarkDownEventType", xmlRequired:false}
            },
            ID:"MarkUpMarkDownHistoryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                MaximumItemCount:{name:"MaximumItemCount", type:"int", xmlRequired:false},
                MinimumFeedbackScore:{name:"MinimumFeedbackScore", type:"int", xmlRequired:false}
            },
            ID:"MaximumItemRequirementsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                MemberMessageExchange:{name:"MemberMessageExchange", type:"MemberMessageExchangeType", 
                                       xmlRequired:false}
            },
            ID:"MemberMessageExchangeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                Question:{name:"Question", type:"MemberMessageType", xmlRequired:false},
                Response:{name:"Response", type:"string", xmlRequired:false},
                MessageStatus:{name:"MessageStatus", type:"MessageStatusTypeCodeType", xmlRequired:false},
                CreationDate:{name:"CreationDate", type:"dateTime", xmlRequired:false},
                LastModifiedDate:{name:"LastModifiedDate", type:"dateTime", xmlRequired:false}
            },
            ID:"MemberMessageExchangeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MessageType:{name:"MessageType", type:"MessageTypeCodeType", xmlRequired:false},
                QuestionType:{name:"QuestionType", type:"QuestionTypeCodeType", xmlRequired:false},
                EmailCopyToSender:{name:"EmailCopyToSender", type:"boolean", xmlRequired:false},
                HideSendersEmailAddress:{name:"HideSendersEmailAddress", type:"boolean", xmlRequired:false},
                DisplayToPublic:{name:"DisplayToPublic", type:"boolean", xmlRequired:false},
                SenderID:{name:"SenderID", type:"string", xmlRequired:false},
                SenderEmail:{name:"SenderEmail", type:"string", xmlRequired:false},
                RecipientID:{name:"RecipientID", type:"string", xmlRequired:false},
                Subject:{name:"Subject", type:"string", xmlRequired:false},
                Body:{name:"Body", type:"string", xmlRequired:false},
                MessageID:{name:"MessageID", type:"string", xmlRequired:false},
                ParentMessageID:{name:"ParentMessageID", type:"string", xmlRequired:false}
            },
            ID:"MemberMessageType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MerchDisplayCodeType",
            valueMap:["DefaultTheme", "StoreTheme", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MerchandizingPrefCodeType",
            valueMap:["OptIn", "OptOut", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MessageStatusTypeCodeType",
            valueMap:["Answered", "Unanswered", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MessageTypeCodeType",
            valueMap:["AskSellerQuestion", "ResponseToASQQuestion", "ContactEbayMember", 
                      "ContactTransactionPartner","ResponseToContacteBayMember", "ContacteBayMemberViaCommunityLink", 
                      "CustomCode","All", "ContactMyBidder"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"MinimumReservePriceDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ModifyActionCodeType",
            valueMap:["Add", "Delete", "Update", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Alert:{name:"Alert", type:"MyMessagesAlertType", xmlRequired:false}
            },
            ID:"MyMessagesAlertArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                AlertID:{name:"AlertID", type:"MyMessagesAlertIDType", xmlRequired:false}
            },
            ID:"MyMessagesAlertIDArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"MyMessagesAlertIDType"})
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MyMessagesAlertResolutionStatusCode",
            valueMap:["Unresolved", "ResolvedByAutoResolution", "ResolvedByUser"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Sender:{name:"Sender", type:"string", xmlRequired:false},
                RecipientUserID:{name:"RecipientUserID", type:"string", xmlRequired:false},
                Subject:{name:"Subject", type:"string", xmlRequired:false},
                Priority:{name:"Priority", type:"string", xmlRequired:false},
                AlertID:{name:"AlertID", type:"MyMessagesAlertIDType", xmlRequired:false},
                ExternalAlertID:{name:"ExternalAlertID", type:"string", xmlRequired:false},
                ContentType:{name:"ContentType", type:"string", xmlRequired:false},
                Text:{name:"Text", type:"string", xmlRequired:false},
                ResolutionStatus:{name:"ResolutionStatus", type:"MyMessagesAlertResolutionStatusCode", 
                                  xmlRequired:false},
                Read:{name:"Read", type:"boolean", xmlRequired:false},
                CreationDate:{name:"CreationDate", type:"dateTime", xmlRequired:false},
                ReceiveDate:{name:"ReceiveDate", type:"dateTime", xmlRequired:false},
                ExpirationDate:{name:"ExpirationDate", type:"dateTime", xmlRequired:false},
                ResolutionDate:{name:"ResolutionDate", type:"dateTime", xmlRequired:false},
                LastReadDate:{name:"LastReadDate", type:"dateTime", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                IsTimedResolution:{name:"IsTimedResolution", type:"boolean", xmlRequired:false},
                ActionURL:{name:"ActionURL", type:"string", xmlRequired:false},
                ResponseDetails:{name:"ResponseDetails", type:"MyMessagesResponseDetailsType", xmlRequired:false},
                ForwardDetails:{name:"ForwardDetails", type:"MyMessagesForwardDetailsType", xmlRequired:false},
                Folder:{name:"Folder", type:"MyMessagesFolderType", xmlRequired:false}
            },
            ID:"MyMessagesAlertType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"MyMessagesFolderOperationCodeType",
            valueMap:["Display", "Rename", "Remove", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FolderID:{name:"FolderID", type:"long", xmlRequired:false},
                FolderName:{name:"FolderName", type:"string", xmlRequired:false},
                NewAlertCount:{name:"NewAlertCount", type:"int", xmlRequired:false},
                NewMessageCount:{name:"NewMessageCount", type:"int", xmlRequired:false},
                TotalAlertCount:{name:"TotalAlertCount", type:"int", xmlRequired:false},
                TotalMessageCount:{name:"TotalMessageCount", type:"int", xmlRequired:false}
            },
            ID:"MyMessagesFolderSummaryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FolderID:{name:"FolderID", type:"long", xmlRequired:false},
                FolderName:{name:"FolderName", type:"string", xmlRequired:false}
            },
            ID:"MyMessagesFolderType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserForwardDate:{name:"UserForwardDate", type:"dateTime", xmlRequired:false},
                ForwardMessageEncoding:{name:"ForwardMessageEncoding", type:"string", xmlRequired:false}
            },
            ID:"MyMessagesForwardDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Message:{name:"Message", type:"MyMessagesMessageType", xmlRequired:false}
            },
            ID:"MyMessagesMessageArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                MessageID:{name:"MessageID", type:"MyMessagesMessageIDType", xmlRequired:false}
            },
            ID:"MyMessagesMessageIDArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"MyMessagesMessageIDType"})
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Sender:{name:"Sender", type:"string", xmlRequired:false},
                RecipientUserID:{name:"RecipientUserID", type:"string", xmlRequired:false},
                SendToName:{name:"SendToName", type:"string", xmlRequired:false},
                Subject:{name:"Subject", type:"string", xmlRequired:false},
                MessageID:{name:"MessageID", type:"MyMessagesMessageIDType", xmlRequired:false},
                ExternalMessageID:{name:"ExternalMessageID", type:"string", xmlRequired:false},
                ContentType:{name:"ContentType", type:"string", xmlRequired:false},
                Text:{name:"Text", type:"string", xmlRequired:false},
                Flagged:{name:"Flagged", type:"boolean", xmlRequired:false},
                Read:{name:"Read", type:"boolean", xmlRequired:false},
                CreationDate:{name:"CreationDate", type:"dateTime", xmlRequired:false},
                ReceiveDate:{name:"ReceiveDate", type:"dateTime", xmlRequired:false},
                ExpirationDate:{name:"ExpirationDate", type:"dateTime", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                ResponseDetails:{name:"ResponseDetails", type:"MyMessagesResponseDetailsType", xmlRequired:false},
                ForwardDetails:{name:"ForwardDetails", type:"MyMessagesForwardDetailsType", xmlRequired:false},
                Folder:{name:"Folder", type:"MyMessagesFolderType", xmlRequired:false}
            },
            ID:"MyMessagesMessageType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ResponseEnabled:{name:"ResponseEnabled", type:"boolean", xmlRequired:false},
                ResponseURL:{name:"ResponseURL", type:"anyURI", xmlRequired:false},
                UserResponseDate:{name:"UserResponseDate", type:"dateTime", xmlRequired:false}
            },
            ID:"MyMessagesResponseDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                FolderSummary:{name:"FolderSummary", type:"MyMessagesFolderSummaryType", xmlRequired:false},
                NewAlertCount:{name:"NewAlertCount", type:"int", xmlRequired:false},
                NewMessageCount:{name:"NewMessageCount", type:"int", xmlRequired:false},
                UnresolvedAlertCount:{name:"UnresolvedAlertCount", type:"int", xmlRequired:false},
                FlaggedMessageCount:{name:"FlaggedMessageCount", type:"int", xmlRequired:false},
                TotalAlertCount:{name:"TotalAlertCount", type:"int", xmlRequired:false},
                TotalMessageCount:{name:"TotalMessageCount", type:"int", xmlRequired:false}
            },
            ID:"MyMessagesSummaryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TotalAvailable:{name:"TotalAvailable", type:"int", xmlRequired:false},
                FavoriteSearch:{name:"FavoriteSearch", type:"MyeBayFavoriteSearchType", xmlRequired:false}
            },
            ID:"MyeBayFavoriteSearchListType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SearchName:{name:"SearchName", type:"string", xmlRequired:false},
                SearchQuery:{name:"SearchQuery", type:"string", xmlRequired:false}
            },
            ID:"MyeBayFavoriteSearchType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TotalAvailable:{name:"TotalAvailable", type:"int", xmlRequired:false},
                FavoriteSeller:{name:"FavoriteSeller", type:"MyeBayFavoriteSellerType", xmlRequired:false}
            },
            ID:"MyeBayFavoriteSellerListType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserID:{name:"UserID", type:"string", xmlRequired:false},
                StoreName:{name:"StoreName", type:"string", xmlRequired:false}
            },
            ID:"MyeBayFavoriteSellerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TotalAvailable:{name:"TotalAvailable", type:"int", xmlRequired:false},
                SecondChanceOffer:{name:"SecondChanceOffer", type:"ItemType", xmlRequired:false}
            },
            ID:"MyeBaySecondChanceOfferListType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Include:{name:"Include", type:"boolean", xmlRequired:false},
                Sort:{name:"Sort", type:"SortOrderCodeType", xmlRequired:false},
                MaxResults:{name:"MaxResults", type:"int", xmlRequired:false}
            },
            ID:"MyeBaySelectionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ActiveAuctionCount:{name:"ActiveAuctionCount", type:"int", xmlRequired:false},
                AuctionSellingCount:{name:"AuctionSellingCount", type:"int", xmlRequired:false},
                AuctionBidCount:{name:"AuctionBidCount", type:"int", xmlRequired:false},
                TotalAuctionSellingValue:{name:"TotalAuctionSellingValue", type:"AmountType", xmlRequired:false},
                TotalSoldCount:{name:"TotalSoldCount", type:"int", xmlRequired:false},
                TotalSoldValue:{name:"TotalSoldValue", type:"AmountType", xmlRequired:false},
                SoldDurationInDays:{name:"SoldDurationInDays", type:"int", xmlRequired:false},
                ClassifiedAdCount:{name:"ClassifiedAdCount", type:"int", xmlRequired:false},
                TotalLeadCount:{name:"TotalLeadCount", type:"int", xmlRequired:false},
                ClassifiedAdOfferCount:{name:"ClassifiedAdOfferCount", type:"int", xmlRequired:false},
                TotalListingsWithLeads:{name:"TotalListingsWithLeads", type:"int", xmlRequired:false}
            },
            ID:"MyeBaySellingSummaryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                NameValueList:{name:"NameValueList", type:"NameValueListType", xmlRequired:false}
            },
            ID:"NameValueListArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                Value:{name:"Value", type:"string", xmlRequired:false}
            },
            ID:"NameValueListType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationDeliveryStatusCodeType",
            valueMap:["CustomCode", "Delivered", "Failed", "Rejected", "MarkedDown"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                NotificationDetails:{name:"NotificationDetails", type:"NotificationDetailsType", xmlRequired:false}
            },
            ID:"NotificationDetailsArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DeliveryURL:{name:"DeliveryURL", type:"anyURI", xmlRequired:false},
                ReferenceID:{name:"ReferenceID", type:"string", xmlRequired:false},
                ExpirationTime:{name:"ExpirationTime", type:"dateTime", xmlRequired:false},
                Type:{name:"Type", type:"NotificationEventTypeCodeType", xmlRequired:false},
                Retries:{name:"Retries", type:"int", xmlRequired:false},
                DeliveryStatus:{name:"DeliveryStatus", type:"NotificationEventStateCodeType", xmlRequired:false},
                NextRetryTime:{name:"NextRetryTime", type:"dateTime", xmlRequired:false},
                DeliveryTime:{name:"DeliveryTime", type:"dateTime", xmlRequired:false},
                ErrorMessage:{name:"ErrorMessage", type:"string", xmlRequired:false}
            },
            ID:"NotificationDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                NotificationEnable:{name:"NotificationEnable", type:"NotificationEnableType", xmlRequired:false}
            },
            ID:"NotificationEnableArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EventType:{name:"EventType", type:"NotificationEventTypeCodeType", xmlRequired:false},
                EventEnable:{name:"EventEnable", type:"EnableCodeType", xmlRequired:false}
            },
            ID:"NotificationEnableType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationEventPropertyNameCodeType",
            valueMap:["TimeLeft", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EventType:{name:"EventType", type:"NotificationEventTypeCodeType", xmlRequired:false},
                Name:{name:"Name", type:"NotificationEventPropertyNameCodeType", xmlRequired:false},
                Value:{name:"Value", type:"string", xmlRequired:false}
            },
            ID:"NotificationEventPropertyType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationEventStateCodeType",
            valueMap:["New", "Failed", "MarkedDown", "Pending", "FailedPending", "MarkedDownPending", 
                      "Delivered","Undeliverable", "Rejected", "Canceled", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationEventTypeCodeType",
            valueMap:["None", "OutBid", "EndOfAuction", "AuctionCheckoutComplete", 
                      "FixedPriceEndOfTransaction","CheckoutBuyerRequestsTotal", "Feedback", "FeedbackForSeller", 
                      "FixedPriceTransaction","SecondChanceOffer", "AskSellerQuestion", "ItemListed", "ItemRevised", 
                      "BuyerResponseDispute","SellerOpenedDispute", "SellerRespondedToDispute", "SellerClosedDispute", 
                      "BestOffer","MyMessagesAlertHeader", "MyMessagesAlert", "MyMessageseBayMessageHeader", 
                      "MyMessageseBayMessage","MyMessagesM2MMessageHeader", "MyMessagesM2MMessage", "INRBuyerOpenedDispute", 
                      "INRBuyerRespondedToDispute","INRBuyerClosedDispute", "INRSellerRespondedToDispute", "Checkout", 
                      "WatchedItemEndingSoon","ItemClosed", "ItemSuspended", "ItemSold", "ItemExtended", "UserIDChanged", 
                      "EmailAddressChanged","PasswordChanged", "PasswordHintChanged", "PaymentDetailChanged", 
                      "AccountSuspended","AccountSummary", "ThirdPartyCartCheckout", "CustomCode"]
        })
,
        isc.XSElement.create({
            mustQualify:true,
            inheritsFrom:"NotificationMessageType",
            fields:{},
            ID:"NotificationMessage"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            useParentFieldOrder:true,
            inheritsFrom:"AbstractResponseType",
            fields:{
                MessageBody:{name:"MessageBody", type:"string", xmlRequired:false},
                EIAS:{name:"EIAS", type:"string", xmlRequired:false}
            },
            ID:"NotificationMessageType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationPayloadTypeCodeType",
            valueMap:["eBLSchemaSOAP", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"NotificationRoleCodeType",
            valueMap:["Application", "User", "UserData", "Event", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DeliveredCount:{name:"DeliveredCount", type:"int", xmlRequired:false},
                QueuedNewCount:{name:"QueuedNewCount", type:"int", xmlRequired:false},
                QueuedPendingCount:{name:"QueuedPendingCount", type:"int", xmlRequired:false},
                ExpiredCount:{name:"ExpiredCount", type:"int", xmlRequired:false},
                ErrorCount:{name:"ErrorCount", type:"int", xmlRequired:false}
            },
            ID:"NotificationStatisticsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SMSSubscription:{name:"SMSSubscription", type:"SMSSubscriptionType", xmlRequired:false},
                SummarySchedule:{name:"SummarySchedule", type:"SummaryEventScheduleType", xmlRequired:false}
            },
            ID:"NotificationUserDataType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Offer:{name:"Offer", type:"OfferType", xmlRequired:false}
            },
            ID:"OfferArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Action:{name:"Action", type:"BidActionCodeType", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false},
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                MaxBid:{name:"MaxBid", type:"AmountType", xmlRequired:false},
                Quantity:{name:"Quantity", type:"int", xmlRequired:false},
                SecondChanceEnabled:{name:"SecondChanceEnabled", type:"boolean", xmlRequired:false},
                SiteCurrency:{name:"SiteCurrency", type:"CurrencyCodeType", xmlRequired:false},
                TimeBid:{name:"TimeBid", type:"dateTime", xmlRequired:false},
                HighestBid:{name:"HighestBid", type:"AmountType", xmlRequired:false},
                ConvertedPrice:{name:"ConvertedPrice", type:"AmountType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                User:{name:"User", type:"UserType", xmlRequired:false},
                UserConsent:{name:"UserConsent", type:"boolean", xmlRequired:false},
                BidCount:{name:"BidCount", type:"int", xmlRequired:false}
            },
            ID:"OfferType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"OperationTypeCodeType",
            valueMap:["ItemRules", "ReplaceAllDefaultRules", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Order:{name:"Order", type:"OrderType", xmlRequired:false}
            },
            ID:"OrderArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                OrderID:{name:"OrderID", type:"OrderIDType", xmlRequired:false}
            },
            ID:"OrderIDArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"OrderIDType"})
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"OrderRoleCodeType",
            valueMap:["Buyer", "Seller", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"OrderStatusCodeType",
            valueMap:["Active", "Inactive", "Completed", "Cancelled", "Shipped", "Default", "Authenticated", 
                      "InProcess","Invalid", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                OrderTransaction:{name:"OrderTransaction", type:"OrderTransactionType", xmlRequired:false}
            },
            ID:"OrderTransactionArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Order:{name:"Order", type:"OrderType", xmlRequired:false},
                Transaction:{name:"Transaction", type:"TransactionType", xmlRequired:false}
            },
            ID:"OrderTransactionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                OrderID:{name:"OrderID", type:"OrderIDType", xmlRequired:false},
                OrderStatus:{name:"OrderStatus", type:"OrderStatusCodeType", xmlRequired:false},
                AdjustmentAmount:{name:"AdjustmentAmount", type:"AmountType", xmlRequired:false},
                AmountPaid:{name:"AmountPaid", type:"AmountType", xmlRequired:false},
                AmountSaved:{name:"AmountSaved", type:"AmountType", xmlRequired:false},
                CheckoutStatus:{name:"CheckoutStatus", type:"CheckoutStatusType", xmlRequired:false},
                ShippingDetails:{name:"ShippingDetails", type:"ShippingDetailsType", xmlRequired:false},
                CreatingUserRole:{name:"CreatingUserRole", type:"TradingRoleCodeType", xmlRequired:false},
                CreatedTime:{name:"CreatedTime", type:"dateTime", xmlRequired:false},
                FinanceOfferID:{name:"FinanceOfferID", type:"string", xmlRequired:false},
                PaymentMethods:{name:"PaymentMethods", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                SellerEmail:{name:"SellerEmail", type:"string", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false},
                ShippingServiceSelected:{name:"ShippingServiceSelected", type:"ShippingServiceOptionsType", 
                                         xmlRequired:false},
                Subtotal:{name:"Subtotal", type:"AmountType", xmlRequired:false},
                Total:{name:"Total", type:"AmountType", xmlRequired:false},
                ExternalTransaction:{name:"ExternalTransaction", type:"ExternalTransactionType", xmlRequired:false},
                DigitalDelivery:{name:"DigitalDelivery", type:"boolean", xmlRequired:false},
                TransactionArray:{name:"TransactionArray", type:"TransactionArrayType", xmlRequired:false},
                BuyerUserID:{name:"BuyerUserID", type:"UserIDType", xmlRequired:false}
            },
            ID:"OrderType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemArray:{name:"ItemArray", type:"ItemArrayType", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"PaginatedItemArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                OrderTransactionArray:{name:"OrderTransactionArray", type:"OrderTransactionArrayType", 
                                       xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"PaginatedOrderTransactionArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                TransactionArray:{name:"TransactionArray", type:"TransactionArrayType", xmlRequired:false},
                PaginationResult:{name:"PaginationResult", type:"PaginationResultType", xmlRequired:false}
            },
            ID:"PaginatedTransactionArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TotalNumberOfPages:{name:"TotalNumberOfPages", type:"int", xmlRequired:false},
                TotalNumberOfEntries:{name:"TotalNumberOfEntries", type:"int", xmlRequired:false}
            },
            ID:"PaginationResultType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PaidStatusCodeType",
            valueMap:["NotPaid", "BuyerHasNotCompletedCheckout", "PaymentPendingWithPayPal", 
                      "PaidWithPayPal","MarkedAsPaid", "PaymentPendingWithEscrow", "PaidWithEscrow", 
                      "EscrowPaymentCancelled","PaymentPendingWithPaisaPay", "PaidWithPaisaPay", "PaymentPending", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PayPalAccountLevelCodeType",
            valueMap:["Unverified", "InternationalUnverified", "Verified", "InternationalVerified", 
                      "Trusted","Unknown", "Invalid", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PayPalAccountStatusCodeType",
            valueMap:["Active", "Closed", "HighRestricted", "LowRestricted", "Locked", "CustomCode", 
                      "WireOff","Unknown", "Invalid"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PayPalAccountTypeCodeType",
            valueMap:["Personal", "Premier", "Business", "Unknown", "Invalid", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                HoursToDeposit:{name:"HoursToDeposit", type:"int", xmlRequired:false},
                DaysToFullPayment:{name:"DaysToFullPayment", type:"int", xmlRequired:false}
            },
            ID:"PaymentDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PaymentMethodSearchCodeType",
            valueMap:["PayPal", "PaisaPay", "PayPalOrPaisaPay"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PaymentOption:{name:"PaymentOption", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"PaymentOptionDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PaymentStatusCodeType",
            valueMap:["NoPaymentFailure", "BuyerECheckBounced", "BuyerCreditCardFailed", 
                      "BuyerFailedPaymentReportedBySeller","PayPalPaymentInProcess", "PaymentInProcess", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PaymentTypeCodeType",
            valueMap:["Sale", "Refund", "SellerDeniedPayment", "AdminReversal", "AllOther", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PhotoDisplayCodeType",
            valueMap:["None", "SlideShow", "SuperSize", "PicturePack", "SiteHostedPictureShow", 
                      "VendorHostedPictureShow","SuperSizePictureShow", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                GalleryType:{name:"GalleryType", type:"GalleryTypeCodeType", xmlRequired:false},
                GalleryURL:{name:"GalleryURL", type:"anyURI", xmlRequired:false},
                PhotoDisplay:{name:"PhotoDisplay", type:"PhotoDisplayCodeType", xmlRequired:false},
                PictureURL:{name:"PictureURL", type:"anyURI", xmlRequired:false},
                PictureSource:{name:"PictureSource", type:"PictureSourceCodeType", xmlRequired:false}
            },
            ID:"PictureDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PictureManagerActionCodeType",
            valueMap:["Add", "Delete", "Rename", "Move", "Change", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PictureManagerDetailLevelCodeType",
            valueMap:["ReturnAll", "ReturnSubscription", "ReturnPicture", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SubscriptionLevel:{name:"SubscriptionLevel", type:"PictureManagerSubscriptionLevelCodeType", 
                                   xmlRequired:false},
                StorageUsed:{name:"StorageUsed", type:"int", xmlRequired:false},
                TotalStorageAvailable:{name:"TotalStorageAvailable", type:"int", xmlRequired:false},
                KeepOriginal:{name:"KeepOriginal", type:"boolean", xmlRequired:false},
                WatermarkEPS:{name:"WatermarkEPS", type:"boolean", xmlRequired:false},
                WatermarkUserID:{name:"WatermarkUserID", type:"boolean", xmlRequired:false},
                Folder:{name:"Folder", type:"PictureManagerFolderType", xmlRequired:false}
            },
            ID:"PictureManagerDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FolderID:{name:"FolderID", type:"int", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                Picture:{name:"Picture", type:"PictureManagerPictureType", xmlRequired:false}
            },
            ID:"PictureManagerFolderType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisplayType:{name:"DisplayType", type:"PictureManagerPictureDisplayTypeCodeType", 
                             xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Size:{name:"Size", type:"int", xmlRequired:false},
                Height:{name:"Height", type:"int", xmlRequired:false},
                Width:{name:"Width", type:"int", xmlRequired:false}
            },
            ID:"PictureManagerPictureDisplayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PictureManagerPictureDisplayTypeCodeType",
            valueMap:["Thumbnail", "BIBO", "Standard", "Large", "Supersize", "Original", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PictureURL:{name:"PictureURL", type:"anyURI", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                Date:{name:"Date", type:"dateTime", xmlRequired:false},
                DisplayFormat:{name:"DisplayFormat", type:"PictureManagerPictureDisplayType", 
                               xmlRequired:false}
            },
            ID:"PictureManagerPictureType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PictureManagerSubscriptionLevelCodeType",
            valueMap:["Free", "Level1", "Level2", "Level3", "Level4", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SubscriptionLevel:{name:"SubscriptionLevel", type:"PictureManagerSubscriptionLevelCodeType", 
                                   xmlRequired:false},
                Fee:{name:"Fee", type:"AmountType", xmlRequired:false},
                StorageSize:{name:"StorageSize", type:"int", xmlRequired:false}
            },
            ID:"PictureManagerSubscriptionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PictureSourceCodeType",
            valueMap:["EPS", "PictureManager", "Vendor", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MaxPrice:{name:"MaxPrice", type:"AmountType", xmlRequired:false},
                MinPrice:{name:"MinPrice", type:"AmountType", xmlRequired:false}
            },
            ID:"PriceRangeFilterType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ProductInfo:{name:"ProductInfo", type:"ProductInfoType", xmlRequired:false}
            },
            ID:"PricingRecommendationsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ProPackEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ProPackPlusEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CheckoutRedirectProStores:{name:"CheckoutRedirectProStores", type:"boolean", xmlRequired:false},
                ProStoresDetails:{name:"ProStoresDetails", type:"ProStoresDetailsType", xmlRequired:false, 
                                  inapplicable:true}
            },
            ID:"ProStoresCheckoutPreferenceType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SellerThirdPartyUsername:{name:"SellerThirdPartyUsername", type:"string", xmlRequired:false},
                StoreName:{name:"StoreName", type:"string", xmlRequired:false},
                Status:{name:"Status", type:"EnableCodeType", xmlRequired:false}
            },
            ID:"ProStoresDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Product:{name:"Product", type:"ExpressProductType", xmlRequired:false}
            },
            ID:"ProductArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                hasMoreChildren:{name:"hasMoreChildren", type:"boolean", xmlAttribute:true},
                ParentProduct:{name:"ParentProduct", type:"ProductType", xmlRequired:false},
                FamilyMembers:{name:"FamilyMembers", type:"ProductType", xmlRequired:false}
            },
            ID:"ProductFamilyType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisplayName:{name:"DisplayName", type:"string", xmlRequired:false},
                DisplayValue:{name:"DisplayValue", type:"string", xmlRequired:false}
            },
            ID:"ProductFinderConstraintType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                productInfoID:{name:"productInfoID", type:"string", xmlAttribute:true},
                AverageStartPrice:{name:"AverageStartPrice", type:"AmountType", xmlRequired:false},
                AverageSoldPrice:{name:"AverageSoldPrice", type:"AmountType", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false}
            },
            ID:"ProductInfoType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ProductID:{name:"ProductID", type:"string", xmlRequired:false},
                IncludeStockPhotoURL:{name:"IncludeStockPhotoURL", type:"boolean", xmlRequired:false},
                IncludePrefilledItemInformation:{name:"IncludePrefilledItemInformation", type:"boolean", xmlRequired:false},
                UseStockPhotoURLAsGallery:{name:"UseStockPhotoURLAsGallery", type:"boolean", xmlRequired:false},
                StockPhotoURL:{name:"StockPhotoURL", type:"anyURI", xmlRequired:false},
                Copyright:{name:"Copyright", type:"string", xmlRequired:false}
            },
            ID:"ProductListingDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Product:{name:"Product", type:"ProductInfoType", xmlRequired:false}
            },
            ID:"ProductRecommendationsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SearchCharacteristicsSet:{name:"SearchCharacteristicsSet", type:"CharacteristicsSetType", 
                                          xmlRequired:false},
                SearchType:{name:"SearchType", type:"CharacteristicsSearchCodeType", xmlRequired:false},
                SortCharacteristics:{name:"SortCharacteristics", type:"CharacteristicType", xmlRequired:false},
                DataElementSet:{name:"DataElementSet", type:"DataElementSetType", xmlRequired:false}
            },
            ID:"ProductSearchPageType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ID:{name:"ID", type:"string", xmlRequired:false},
                NumProducts:{name:"NumProducts", type:"string", xmlRequired:false},
                AttributeSet:{name:"AttributeSet", type:"ResponseAttributeSetType", xmlRequired:false},
                DisplayStockPhotos:{name:"DisplayStockPhotos", type:"boolean", xmlRequired:false}
            },
            ID:"ProductSearchResultType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ProductSearchID:{name:"ProductSearchID", type:"string", xmlRequired:false},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:true},
                ProductFinderID:{name:"ProductFinderID", type:"int", xmlRequired:false},
                ProductID:{name:"ProductID", type:"string", xmlRequired:false},
                SortAttributeID:{name:"SortAttributeID", type:"int", xmlRequired:false},
                MaxChildrenPerFamily:{name:"MaxChildrenPerFamily", type:"int", xmlRequired:false},
                SearchAttributes:{name:"SearchAttributes", type:"SearchAttributesType", xmlRequired:false},
                Pagination:{name:"Pagination", type:"PaginationType", xmlRequired:false},
                AvailableItemsOnly:{name:"AvailableItemsOnly", type:"boolean", xmlRequired:false},
                QueryKeywords:{name:"QueryKeywords", type:"string", xmlRequired:false},
                CharacteristicSetIDs:{name:"CharacteristicSetIDs", type:"CharacteristicSetIDsType", xmlRequired:false},
                ProductReferenceID:{name:"ProductReferenceID", type:"string", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false}
            },
            ID:"ProductSearchType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ProductSortCodeType",
            valueMap:["PopularityAsc", "PopularityDesc", "RatingAsc", "RatingDesc", "ReviewCountAsc", 
                      "ReviewCountDesc","ItemCountAsc", "ItemCountDesc", "TitleAsc", "TitleDesc", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                productID:{name:"productID", type:"string", xmlAttribute:true},
                stockPhotoURL:{name:"stockPhotoURL", type:"anyURI", xmlAttribute:true},
                title:{name:"title", type:"string", xmlAttribute:true},
                CharacteristicsSet:{name:"CharacteristicsSet", type:"CharacteristicsSetType", xmlRequired:false},
                DetailsURL:{name:"DetailsURL", type:"anyURI", xmlRequired:false},
                NumItems:{name:"NumItems", type:"int", xmlRequired:false},
                MinPrice:{name:"MinPrice", type:"AmountType", xmlRequired:false},
                MaxPrice:{name:"MaxPrice", type:"AmountType", xmlRequired:false}
            },
            ID:"ProductType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ProductUseCaseCodeType",
            valueMap:["AddItem", "ReviseItem", "RelistItem", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                PictureURL:{name:"PictureURL", type:"string", xmlRequired:false},
                Position:{name:"Position", type:"int", xmlRequired:false},
                SelectionType:{name:"SelectionType", type:"PromotionItemSelectionCodeType", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false},
                PromotionDetails:{name:"PromotionDetails", type:"PromotionDetailsType", xmlRequired:false},
                TimeLeft:{name:"TimeLeft", type:"duration", xmlRequired:false}
            },
            ID:"PromotedItemType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PromotionPrice:{name:"PromotionPrice", type:"AmountType", xmlRequired:false},
                PromotionPriceType:{name:"PromotionPriceType", type:"PromotionItemPriceTypeCodeType", 
                                    xmlRequired:false},
                BidCount:{name:"BidCount", type:"int", xmlRequired:false},
                ConvertedPromotionPrice:{name:"ConvertedPromotionPrice", type:"AmountType", xmlRequired:false}
            },
            ID:"PromotionDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PromotionItemPriceTypeCodeType",
            valueMap:["AuctionPrice", "BuyItNowPrice", "BestOfferOnlyPrice", "ClassifiedAdPrice", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PromotionItemSelectionCodeType",
            valueMap:["Manual", "Automatic", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PromotionMethodCodeType",
            valueMap:["CrossSell", "UpSell", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                PromotionRule:{name:"PromotionRule", type:"PromotionRuleType", xmlRequired:false}
            },
            ID:"PromotionRuleArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PromotedItem:{name:"PromotedItem", type:"PromotedItemType", xmlRequired:false},
                SiteID:{name:"SiteID", type:"SiteCodeType", xmlRequired:false},
                PromotedStoreCategoryID:{name:"PromotedStoreCategoryID", type:"long", xmlRequired:false},
                PromotedeBayCategoryID:{name:"PromotedeBayCategoryID", type:"string", xmlRequired:false},
                PromotedKeywords:{name:"PromotedKeywords", type:"string", xmlRequired:false},
                ReferringItemID:{name:"ReferringItemID", type:"ItemIDType", xmlRequired:false},
                ReferringStoreCategoryID:{name:"ReferringStoreCategoryID", type:"long", xmlRequired:false},
                ReferringeBayCategoryID:{name:"ReferringeBayCategoryID", type:"string", xmlRequired:false},
                ReferringKeywords:{name:"ReferringKeywords", type:"string", xmlRequired:false},
                PromotionScheme:{name:"PromotionScheme", type:"PromotionSchemeCodeType", xmlRequired:false},
                PromotionMethod:{name:"PromotionMethod", type:"PromotionMethodCodeType", xmlRequired:false}
            },
            ID:"PromotionRuleType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PromotionSchemeCodeType",
            valueMap:["ItemToItem", "ItemToStoreCat", "StoreToStoreCat", "ItemToDefaultRule", "DefaultRule", 
                      "CategoryProximity","RelatedCategoryRule", "DefaultUpSellLogic", "DefaultCrossSellLogic", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                PromotionalSale:{name:"PromotionalSale", type:"PromotionalSaleType", xmlRequired:false}
            },
            ID:"PromotionalSaleArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                OriginalPrice:{name:"OriginalPrice", type:"AmountType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                EndTime:{name:"EndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"PromotionalSaleDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PromotionalSaleStatusCodeType",
            valueMap:["Active", "Scheduled", "Processing", "Inactive", "Deleted", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PromotionalSaleID:{name:"PromotionalSaleID", type:"long", xmlRequired:false},
                PromotionalSaleName:{name:"PromotionalSaleName", type:"string", xmlRequired:false},
                PromotionalSaleItemIDArray:{name:"PromotionalSaleItemIDArray", type:"ItemIDArrayType", xmlRequired:false},
                Status:{name:"Status", type:"PromotionalSaleStatusCodeType", xmlRequired:false},
                DiscountType:{name:"DiscountType", type:"DiscountCodeType", xmlRequired:false},
                DiscountValue:{name:"DiscountValue", type:"double", xmlRequired:false},
                PromotionalSaleStartTime:{name:"PromotionalSaleStartTime", type:"dateTime", xmlRequired:false},
                PromotionalSaleEndTime:{name:"PromotionalSaleEndTime", type:"dateTime", xmlRequired:false}
            },
            ID:"PromotionalSaleType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DiscountName:{name:"DiscountName", type:"DiscountNameCodeType", xmlRequired:false},
                ShippingCost:{name:"ShippingCost", type:"AmountType", xmlRequired:false},
                OrderAmount:{name:"OrderAmount", type:"AmountType", xmlRequired:false},
                ItemCount:{name:"ItemCount", type:"int", xmlRequired:false}
            },
            ID:"PromotionalShippingDiscountDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MaxDistance:{name:"MaxDistance", type:"int", xmlRequired:true},
                PostalCode:{name:"PostalCode", type:"string", xmlRequired:false}
            },
            ID:"ProximitySearchType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"PurchasePurposeTypeCodeType",
            valueMap:["Other", "BuyNowItem", "ShoppingCart", "AuctionItem", "GiftCertificates", 
                      "Subscription","Donation", "eBayBilling", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"QuantityOperatorCodeType",
            valueMap:["LessThan", "LessThanOrEqual", "Equal", "GreaterThan", "GreaterThanOrEqual", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"QuestionTypeCodeType",
            valueMap:["General", "Shipping", "Payment", "MultipleItemShipping", "CustomizedSubject", 
                      "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RCSPaymentStatusCodeType",
            valueMap:["Canceled", "Paid", "Pending", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RangeCodeType",
            valueMap:["High", "Low", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                codeID:{name:"codeID", type:"long", xmlAttribute:true},
                BriefText:{name:"BriefText", type:"string", xmlRequired:false},
                DetailedText:{name:"DetailedText", type:"string", xmlRequired:false}
            },
            ID:"ReasonCodeDetailType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RecipientRelationCodeType",
            valueMap:["1", "2", "3", "4", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RecommendationEngineCodeType",
            valueMap:["ListingAnalyzer", "SIFFTAS", "ProductPricing", "CustomCode", "SuggestedAttributes"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Refund:{name:"Refund", type:"RefundType", xmlRequired:false}
            },
            ID:"RefundArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RefundReasonCodeType",
            valueMap:["CannotShipProduct", "WrongItemShipped", "ItemBadQuality", "ItemDamaged", 
                      "BuyerRemorse","Other", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RefundFromSeller:{name:"RefundFromSeller", type:"AmountType", xmlRequired:false},
                TotalRefundToBuyer:{name:"TotalRefundToBuyer", type:"AmountType", xmlRequired:false},
                RefundTime:{name:"RefundTime", type:"dateTime", xmlRequired:false}
            },
            ID:"RefundType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"RefundTypeCodeType",
            valueMap:["Full", "FullPlusShipping", "CustomOrPartial", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RegionID:{name:"RegionID", type:"string", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"RegionDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Keyword:{name:"Keyword", type:"string", xmlRequired:false}
            },
            ID:"RelatedSearchKeywordArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                DurationInDays:{name:"DurationInDays", type:"int", xmlRequired:false},
                Include:{name:"Include", type:"boolean", xmlRequired:false}
            },
            ID:"ReminderCustomizationType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                PaymentToSendCount:{name:"PaymentToSendCount", type:"int", xmlRequired:false},
                FeedbackToReceiveCount:{name:"FeedbackToReceiveCount", type:"int", xmlRequired:false},
                FeedbackToSendCount:{name:"FeedbackToSendCount", type:"int", xmlRequired:false},
                OutbidCount:{name:"OutbidCount", type:"int", xmlRequired:false},
                PaymentToReceiveCount:{name:"PaymentToReceiveCount", type:"int", xmlRequired:false},
                SecondChanceOfferCount:{name:"SecondChanceOfferCount", type:"int", xmlRequired:false},
                ShippingNeededCount:{name:"ShippingNeededCount", type:"int", xmlRequired:false},
                RelistingNeededCount:{name:"RelistingNeededCount", type:"int", xmlRequired:false},
                TotalNewLeadsCount:{name:"TotalNewLeadsCount", type:"int", xmlRequired:false}
            },
            ID:"RemindersType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CategoriesOnly:{name:"CategoriesOnly", type:"boolean", xmlRequired:false},
                MaxCategories:{name:"MaxCategories", type:"int", xmlRequired:false},
                MaxSubcategories:{name:"MaxSubcategories", type:"int", xmlRequired:false},
                Levels:{name:"Levels", type:"int", xmlRequired:false},
                DemandData:{name:"DemandData", type:"boolean", xmlRequired:false}
            },
            ID:"RequestCategoriesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ApproximatePages:{name:"ApproximatePages", type:"int", xmlRequired:true},
                AttributeSetID:{name:"AttributeSetID", type:"int", xmlRequired:true},
                HasMore:{name:"HasMore", type:"boolean", xmlRequired:true},
                ProductFamilies:{name:"ProductFamilies", type:"ProductFamilyType", xmlRequired:false},
                ProductFinderConstraints:{name:"ProductFinderConstraints", type:"ProductFinderConstraintType", 
                                          xmlRequired:false},
                TooManyMatchesFound:{name:"TooManyMatchesFound", type:"boolean", xmlRequired:true},
                TotalProducts:{name:"TotalProducts", type:"int", xmlRequired:true}
            },
            ID:"ResponseAttributeSetType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AverageRating:{name:"AverageRating", type:"float", xmlRequired:false},
                Review:{name:"Review", type:"ReviewType", xmlRequired:false}
            },
            ID:"ReviewDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false},
                Rating:{name:"Rating", type:"int", xmlRequired:false},
                Text:{name:"Text", type:"string", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                CreationTime:{name:"CreationTime", type:"dateTime", xmlRequired:false}
            },
            ID:"ReviewType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemRevised:{name:"ItemRevised", type:"boolean", xmlRequired:true},
                BuyItNowAdded:{name:"BuyItNowAdded", type:"boolean", xmlRequired:false},
                BuyItNowLowered:{name:"BuyItNowLowered", type:"boolean", xmlRequired:false},
                ReserveLowered:{name:"ReserveLowered", type:"boolean", xmlRequired:false},
                ReserveRemoved:{name:"ReserveRemoved", type:"boolean", xmlRequired:false}
            },
            ID:"ReviseStatusType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AttributeSetArray:{name:"AttributeSetArray", type:"AttributeSetArrayType", xmlRequired:false}
            },
            ID:"SIFFTASRecommendationsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                SKU:{name:"SKU", type:"SKUType", xmlRequired:false}
            },
            ID:"SKUArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"SKUType"})
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SMSSubscriptionErrorCodeCodeType",
            valueMap:["SMSAggregatorNotAvailable", "PhoneNumberInvalid", "PhoneNumberChanged", 
                      "PhoneNumberCarrierChanged","UserRequestedUnregistration", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SMSPhone:{name:"SMSPhone", type:"string", xmlRequired:false},
                UserStatus:{name:"UserStatus", type:"SMSSubscriptionUserStatusCodeType", xmlRequired:false},
                CarrierID:{name:"CarrierID", type:"WirelessCarrierIDCodeType", xmlRequired:false},
                ErrorCode:{name:"ErrorCode", type:"SMSSubscriptionErrorCodeCodeType", xmlRequired:false},
                ItemToUnsubscribe:{name:"ItemToUnsubscribe", type:"ItemIDType", xmlRequired:false}
            },
            ID:"SMSSubscriptionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SMSSubscriptionUserStatusCodeType",
            valueMap:["Registered", "Unregistered", "Pending", "Failed", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"SafePaymentRequiredDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SalesTaxPercent:{name:"SalesTaxPercent", type:"float", xmlRequired:false},
                SalesTaxState:{name:"SalesTaxState", type:"string", xmlRequired:false},
                ShippingIncludedInTax:{name:"ShippingIncludedInTax", type:"boolean", xmlRequired:false},
                SalesTaxAmount:{name:"SalesTaxAmount", type:"AmountType", xmlRequired:false}
            },
            ID:"SalesTaxType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ScheduleID:{name:"ScheduleID", type:"int", xmlRequired:false},
                ScheduleTime:{name:"ScheduleTime", type:"dateTime", xmlRequired:false}
            },
            ID:"ScheduleType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MaxScheduledMinutes:{name:"MaxScheduledMinutes", type:"int", xmlRequired:false},
                MinScheduledMinutes:{name:"MinScheduledMinutes", type:"int", xmlRequired:false},
                MaxScheduledItems:{name:"MaxScheduledItems", type:"int", xmlRequired:false}
            },
            ID:"SchedulingInfoType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AttributeID:{name:"AttributeID", type:"int", xmlRequired:true},
                DateSpecifier:{name:"DateSpecifier", type:"DateSpecifierCodeType", xmlRequired:false},
                RangeSpecifier:{name:"RangeSpecifier", type:"RangeCodeType", xmlRequired:false},
                ValueList:{name:"ValueList", type:"ValType", xmlRequired:false}
            },
            ID:"SearchAttributesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BuyItNowEnabled:{name:"BuyItNowEnabled", type:"boolean", xmlRequired:false},
                Picture:{name:"Picture", type:"boolean", xmlRequired:false},
                RecentListing:{name:"RecentListing", type:"boolean", xmlRequired:false}
            },
            ID:"SearchDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SearchFlagsCodeType",
            valueMap:["Charity", "SearchInDescription", "PayPalBuyerPaymentOption", "NowAndNew", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CountryCode:{name:"CountryCode", type:"CountryCodeType", xmlRequired:false},
                ItemLocation:{name:"ItemLocation", type:"ItemLocationCodeType", xmlRequired:false},
                SearchLocation:{name:"SearchLocation", type:"SearchLocationType", xmlRequired:false},
                Currency:{name:"Currency", type:"CurrencyCodeType", xmlRequired:false}
            },
            ID:"SearchLocationFilterType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                RegionID:{name:"RegionID", type:"string", xmlRequired:false},
                SiteLocation:{name:"SiteLocation", type:"SiteLocationType", xmlRequired:false}
            },
            ID:"SearchLocationType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ProductFinderID:{name:"ProductFinderID", type:"int", xmlRequired:false},
                SearchAttributes:{name:"SearchAttributes", type:"SearchAttributesType", xmlRequired:false}
            },
            ID:"SearchRequestType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                SearchResultItem:{name:"SearchResultItem", type:"SearchResultItemType", xmlRequired:false}
            },
            ID:"SearchResultItemArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                ItemSpecific:{name:"ItemSpecific", type:"NameValueListArrayType", xmlRequired:false},
                SearchResultValues:{name:"SearchResultValues", type:"SearchResultValuesCodeType", xmlRequired:false}
            },
            ID:"SearchResultItemType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SearchResultValuesCodeType",
            valueMap:["Escrow", "New", "CharityListing", "Picture", "Gift", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SearchSortOrderCodeType",
            valueMap:["SortByEndDate", "SortByStartDate", "SortByCurrentBid", "SortByListingDate", 
                      "SortByCurrentBidAsc","SortByCurrentBidDesc", "SortByPayPalAsc", "SortByPayPalDesc", 
                      "SortByEscrowAsc","SortByEscrowDesc", "SortByCountryAsc", "SortByCountryDesc", 
                      "SortByDistanceAsc","SortByBidCountAsc", "SortByBidCountDesc", "BestMatchSort", "CustomCode", 
                      "BestMatchCategoryGroup"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                StoreName:{name:"StoreName", type:"string", xmlRequired:false},
                StoreSearch:{name:"StoreSearch", type:"StoreSearchCodeType", xmlRequired:false}
            },
            ID:"SearchStoreFilterType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SearchTypeCodeType",
            valueMap:["All", "Gallery", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SecondChanceOfferDurationCodeType",
            valueMap:["Days_1", "Days_3", "Days_5", "Days_7", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"string",
            name:"SelectionModeCodeType",
            valueMap:["Automatic", "Manual", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SellerBusinessCodeType",
            valueMap:["Undefined", "Private", "Commercial"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"SellerContactDetailsEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SearchKeywords:{name:"SearchKeywords", type:"string", xmlRequired:false},
                StoreCategoryID:{name:"StoreCategoryID", type:"long", xmlRequired:false},
                ListingType:{name:"ListingType", type:"ListingTypeCodeType", xmlRequired:false},
                SearchSortOrder:{name:"SearchSortOrder", type:"StoreItemListSortOrderCodeType", 
                                 xmlRequired:false},
                MinPrice:{name:"MinPrice", type:"AmountType", xmlRequired:false},
                MaxPrice:{name:"MaxPrice", type:"AmountType", xmlRequired:false},
                FavoriteItemID:{name:"FavoriteItemID", type:"ItemIDType", xmlRequired:false}
            },
            ID:"SellerFavoriteItemPreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SellerGuaranteeLevelCodeType",
            valueMap:["NotEligible", "Regular", "Premium", "Ultra", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SellerLevelCodeType",
            valueMap:["Bronze", "Silver", "Gold", "Platinum", "Titanium", "None", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SellerPaymentMethodCodeType",
            valueMap:["NothingOnFile", "CreditCard", "DirectDebit", "DirectDebitPendingSignatureMandate", 
                      "eBayDirectPay","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AlwaysUseThisPaymentAddress:{name:"AlwaysUseThisPaymentAddress", type:"boolean", xmlRequired:false},
                DisplayPayNowButton:{name:"DisplayPayNowButton", type:"DisplayPayNowButtonCodeType", 
                                     xmlRequired:false},
                PayPalPreferred:{name:"PayPalPreferred", type:"boolean", xmlRequired:false},
                DefaultPayPalEmailAddress:{name:"DefaultPayPalEmailAddress", type:"string", xmlRequired:false},
                PayPalAlwaysOn:{name:"PayPalAlwaysOn", type:"boolean", xmlRequired:false},
                SellerPaymentAddress:{name:"SellerPaymentAddress", type:"AddressType", xmlRequired:false},
                UPSRateOption:{name:"UPSRateOption", type:"UPSRateOptionCodeType", xmlRequired:false}
            },
            ID:"SellerPaymentPreferencesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                OrderID:{name:"OrderID", type:"OrderIDType", xmlRequired:false},
                SellerInventoryID:{name:"SellerInventoryID", type:"string", xmlRequired:false},
                PrivateNotes:{name:"PrivateNotes", type:"string", xmlRequired:false},
                ExternalProductID:{name:"ExternalProductID", type:"ExternalProductIDType", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false},
                PaymentType:{name:"PaymentType", type:"PaymentTypeCodeType", xmlRequired:false},
                TransactionPrice:{name:"TransactionPrice", type:"AmountType", xmlRequired:false},
                ShippingReimbursement:{name:"ShippingReimbursement", type:"AmountType", xmlRequired:false},
                Commission:{name:"Commission", type:"AmountType", xmlRequired:false},
                AmountPaid:{name:"AmountPaid", type:"AmountType", xmlRequired:false},
                PaidTime:{name:"PaidTime", type:"dateTime", xmlRequired:false}
            },
            ID:"SellerPaymentType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                PaisaPayStatus:{name:"PaisaPayStatus", type:"int", xmlRequired:false},
                AllowPaymentEdit:{name:"AllowPaymentEdit", type:"boolean", xmlRequired:true},
                BillingCurrency:{name:"BillingCurrency", type:"CurrencyCodeType", xmlRequired:false},
                CheckoutEnabled:{name:"CheckoutEnabled", type:"boolean", xmlRequired:true},
                CIPBankAccountStored:{name:"CIPBankAccountStored", type:"boolean", xmlRequired:true},
                GoodStanding:{name:"GoodStanding", type:"boolean", xmlRequired:true},
                LiveAuctionAuthorized:{name:"LiveAuctionAuthorized", type:"boolean", xmlRequired:true},
                MerchandizingPref:{name:"MerchandizingPref", type:"MerchandizingPrefCodeType", xmlRequired:false},
                QualifiesForB2BVAT:{name:"QualifiesForB2BVAT", type:"boolean", xmlRequired:true},
                SellerGuaranteeLevel:{name:"SellerGuaranteeLevel", type:"SellerGuaranteeLevelCodeType", 
                                      xmlRequired:false},
                SellerLevel:{name:"SellerLevel", type:"SellerLevelCodeType", xmlRequired:false},
                SellerPaymentAddress:{name:"SellerPaymentAddress", type:"AddressType", xmlRequired:false},
                SchedulingInfo:{name:"SchedulingInfo", type:"SchedulingInfoType", xmlRequired:false},
                StoreOwner:{name:"StoreOwner", type:"boolean", xmlRequired:true},
                StoreURL:{name:"StoreURL", type:"anyURI", xmlRequired:false},
                SellerBusinessType:{name:"SellerBusinessType", type:"SellerBusinessCodeType", xmlRequired:false},
                RegisteredBusinessSeller:{name:"RegisteredBusinessSeller", type:"boolean", xmlRequired:false},
                ExpressEligible:{name:"ExpressEligible", type:"boolean", xmlRequired:false},
                PaymentMethod:{name:"PaymentMethod", type:"SellerPaymentMethodCodeType", xmlRequired:false},
                ProStoresPreference:{name:"ProStoresPreference", type:"ProStoresCheckoutPreferenceType", 
                                     xmlRequired:false},
                ExpressWallet:{name:"ExpressWallet", type:"boolean", xmlRequired:false},
                ExpressSellerRequirements:{name:"ExpressSellerRequirements", type:"ExpressSellerRequirementsType", 
                                           xmlRequired:false},
                CharityRegistered:{name:"CharityRegistered", type:"boolean", xmlRequired:false},
                SafePaymentExempt:{name:"SafePaymentExempt", type:"boolean", xmlRequired:false}
            },
            ID:"SellerType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ProductName:{name:"ProductName", type:"string", xmlRequired:false},
                PartNumber:{name:"PartNumber", type:"int", xmlRequired:false},
                ProductPartNumber:{name:"ProductPartNumber", type:"string", xmlRequired:false}
            },
            ID:"SellingManagerProductDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BidCount:{name:"BidCount", type:"int", xmlRequired:false},
                BidIncrement:{name:"BidIncrement", type:"AmountType", xmlRequired:false},
                ConvertedCurrentPrice:{name:"ConvertedCurrentPrice", type:"AmountType", xmlRequired:false},
                CurrentPrice:{name:"CurrentPrice", type:"AmountType", xmlRequired:false},
                HighBidder:{name:"HighBidder", type:"UserType", xmlRequired:false},
                LeadCount:{name:"LeadCount", type:"int", xmlRequired:false},
                MinimumToBid:{name:"MinimumToBid", type:"AmountType", xmlRequired:false},
                QuantitySold:{name:"QuantitySold", type:"int", xmlRequired:false},
                ReserveMet:{name:"ReserveMet", type:"boolean", xmlRequired:false},
                SecondChanceEligible:{name:"SecondChanceEligible", type:"boolean", xmlRequired:false},
                BidderCount:{name:"BidderCount", type:"long", xmlRequired:false},
                ListingStatus:{name:"ListingStatus", type:"ListingStatusCodeType", xmlRequired:false},
                FinalValueFee:{name:"FinalValueFee", type:"AmountType", xmlRequired:false},
                PromotionalSaleDetails:{name:"PromotionalSaleDetails", type:"PromotionalSaleDetailsType", 
                                        xmlRequired:false}
            },
            ID:"SellingStatusType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ActiveAuctionCount:{name:"ActiveAuctionCount", type:"int", xmlRequired:false},
                AuctionSellingCount:{name:"AuctionSellingCount", type:"int", xmlRequired:false},
                AuctionBidCount:{name:"AuctionBidCount", type:"int", xmlRequired:false},
                TotalAuctionSellingValue:{name:"TotalAuctionSellingValue", type:"AmountType", xmlRequired:false},
                TotalSoldCount:{name:"TotalSoldCount", type:"int", xmlRequired:false},
                TotalSoldValue:{name:"TotalSoldValue", type:"AmountType", xmlRequired:false},
                SoldDurationInDays:{name:"SoldDurationInDays", type:"int", xmlRequired:false}
            },
            ID:"SellingSummaryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SetUserNotesActionCodeType",
            valueMap:["AddOrUpdate", "Delete"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShipmentDeliveryStatusCodeType",
            valueMap:["Created", "DroppedOff", "InTransit", "Delivered", "Returned", "Canceled", 
                      "LabelPrinted","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShipmentStatusCodeType",
            valueMap:["Active", "Canceled", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EstimatedDeliveryDate:{name:"EstimatedDeliveryDate", type:"dateTime", xmlRequired:false},
                InsuredValue:{name:"InsuredValue", type:"AmountType", xmlRequired:false},
                PackageDepth:{name:"PackageDepth", type:"MeasureType", xmlRequired:false},
                PackageLength:{name:"PackageLength", type:"MeasureType", xmlRequired:false},
                PackageWidth:{name:"PackageWidth", type:"MeasureType", xmlRequired:false},
                PayPalShipmentID:{name:"PayPalShipmentID", type:"string", xmlRequired:false},
                ShipmentID:{name:"ShipmentID", type:"long", xmlRequired:false},
                PostageTotal:{name:"PostageTotal", type:"AmountType", xmlRequired:false},
                PrintedTime:{name:"PrintedTime", type:"dateTime", xmlRequired:false},
                ShipFromAddress:{name:"ShipFromAddress", type:"AddressType", xmlRequired:false},
                ShippingAddress:{name:"ShippingAddress", type:"AddressType", xmlRequired:false},
                ShippingCarrierUsed:{name:"ShippingCarrierUsed", type:"ShippingCarrierCodeType", xmlRequired:false},
                ShippingFeature:{name:"ShippingFeature", type:"ShippingFeatureCodeType", xmlRequired:false},
                ShippingPackage:{name:"ShippingPackage", type:"ShippingPackageCodeType", xmlRequired:false},
                ShippingServiceUsed:{name:"ShippingServiceUsed", type:"token", xmlRequired:false},
                ShipmentTrackingNumber:{name:"ShipmentTrackingNumber", type:"string", xmlRequired:false},
                WeightMajor:{name:"WeightMajor", type:"MeasureType", xmlRequired:false},
                WeightMinor:{name:"WeightMinor", type:"MeasureType", xmlRequired:false},
                ItemTransactionID:{name:"ItemTransactionID", type:"ItemTransactionIDType", xmlRequired:false},
                DeliveryDate:{name:"DeliveryDate", type:"dateTime", xmlRequired:false},
                DeliveryStatus:{name:"DeliveryStatus", type:"ShipmentDeliveryStatusCodeType", xmlRequired:false},
                RefundGrantedTime:{name:"RefundGrantedTime", type:"dateTime", xmlRequired:false},
                RefundRequestedTime:{name:"RefundRequestedTime", type:"dateTime", xmlRequired:false},
                Status:{name:"Status", type:"ShipmentStatusCodeType", xmlRequired:false}
            },
            ID:"ShipmentType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingCarrierCodeType",
            valueMap:["UPS", "USPS", "DeutschePost", "DHL", "Hermes", "iLoxx", "Other", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AllowPaymentEdit:{name:"AllowPaymentEdit", type:"boolean", xmlRequired:false},
                ApplyShippingDiscount:{name:"ApplyShippingDiscount", type:"boolean", xmlRequired:false},
                CalculatedShippingRate:{name:"CalculatedShippingRate", type:"CalculatedShippingRateType", 
                                        xmlRequired:false},
                ChangePaymentInstructions:{name:"ChangePaymentInstructions", type:"boolean", xmlRequired:false},
                InsuranceFee:{name:"InsuranceFee", type:"AmountType", xmlRequired:false},
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false},
                InsuranceWanted:{name:"InsuranceWanted", type:"boolean", xmlRequired:false},
                PaymentEdited:{name:"PaymentEdited", type:"boolean", xmlRequired:false},
                PaymentInstructions:{name:"PaymentInstructions", type:"string", xmlRequired:false},
                SalesTax:{name:"SalesTax", type:"SalesTaxType", xmlRequired:false},
                ShippingRateErrorMessage:{name:"ShippingRateErrorMessage", type:"string", xmlRequired:false},
                ShippingRateType:{name:"ShippingRateType", type:"ShippingRateTypeCodeType", xmlRequired:false},
                ShippingServiceOptions:{name:"ShippingServiceOptions", type:"ShippingServiceOptionsType", 
                                        xmlRequired:false},
                InternationalShippingServiceOption:{name:"InternationalShippingServiceOption", 
                                                    type:"InternationalShippingServiceOptionsType",xmlRequired:false},
                ShippingType:{name:"ShippingType", type:"ShippingTypeCodeType", xmlRequired:false},
                SellingManagerSalesRecordNumber:{name:"SellingManagerSalesRecordNumber", type:"int", xmlRequired:false},
                ThirdPartyCheckout:{name:"ThirdPartyCheckout", type:"boolean", xmlRequired:false},
                TaxTable:{name:"TaxTable", type:"TaxTableType", xmlRequired:false},
                GetItFast:{name:"GetItFast", type:"boolean", xmlRequired:false},
                ShipmentTrackingNumber:{name:"ShipmentTrackingNumber", type:"string", xmlRequired:false},
                ShippingServiceUsed:{name:"ShippingServiceUsed", type:"token", xmlRequired:false},
                DefaultShippingCost:{name:"DefaultShippingCost", type:"AmountType", xmlRequired:false},
                InsuranceDetails:{name:"InsuranceDetails", type:"InsuranceDetailsType", xmlRequired:false},
                InternationalInsuranceDetails:{name:"InternationalInsuranceDetails", type:"InsuranceDetailsType", 
                                               xmlRequired:false},
                ShippingDiscountProfileID:{name:"ShippingDiscountProfileID", type:"string", xmlRequired:false},
                FlatShippingDiscount:{name:"FlatShippingDiscount", type:"FlatShippingDiscountType", xmlRequired:false},
                CalculatedShippingDiscount:{name:"CalculatedShippingDiscount", type:"CalculatedShippingDiscountType", 
                                            xmlRequired:false},
                PromotionalShippingDiscount:{name:"PromotionalShippingDiscount", type:"boolean", xmlRequired:false},
                InternationalShippingDiscountProfileID:{name:"InternationalShippingDiscountProfileID", type:"string", xmlRequired:false},
                InternationalFlatShippingDiscount:{name:"InternationalFlatShippingDiscount", type:"FlatShippingDiscountType", 
                                                   xmlRequired:false},
                InternationalCalculatedShippingDiscount:{name:"InternationalCalculatedShippingDiscount", 
                                                         type:"CalculatedShippingDiscountType",xmlRequired:false},
                InternationalPromotionalShippingDiscount:{name:"InternationalPromotionalShippingDiscount", type:"boolean", 
                                                          xmlRequired:false},
                PromotionalShippingDiscountDetails:{name:"PromotionalShippingDiscountDetails", 
                                                    type:"PromotionalShippingDiscountDetailsType",xmlRequired:false}
            },
            ID:"ShippingDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingFeatureCodeType",
            valueMap:["DeliveryConfirmation", "SignatureConfirmation", "StealthPostage", "SaturdayDelivery", 
                      "Other","NotDefined", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                InsuranceOption:{name:"InsuranceOption", type:"InsuranceOptionCodeType", xmlRequired:false},
                FlatRateInsuranceRangeCost:{name:"FlatRateInsuranceRangeCost", type:"FlatRateInsuranceRangeCostType", 
                                            xmlRequired:false}
            },
            ID:"ShippingInsuranceType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ShippingLocation:{name:"ShippingLocation", type:"string", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false}
            },
            ID:"ShippingLocationDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingPackageCodeType",
            valueMap:["None", "Letter", "LargeEnvelope", "USPSLargePack", "VeryLargePack", "ExtraLargePack", 
                      "UPSLetter","USPSFlatRateEnvelope", "PackageThickEnvelope", "Roll", "Europallet", 
                      "OneWayPallet","BulkyGoods", "Furniture", "Cars", "Motorbikes", "Caravan", 
                      "IndustryVehicles","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingRateTypeCodeType",
            valueMap:["OnDemand", "DailyPickup", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingRegionCodeType",
            valueMap:["Africa", "Asia", "Caribbean", "Europe", "LatinAmerica", "MiddleEast", "NorthAmerica", 
                      "Oceania","SouthAmerica", "EuropeanUnion", "WillNotShip", "Worldwide", "Americas", 
                      "None","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingServiceCodeType",
            valueMap:["UPSGround", "UPS3rdDay", "UPS2ndDay", "UPSNextDay", "USPSPriority", "USPSParcel", 
                      "USPSMedia","USPSFirstClass", "ShippingMethodStandard", "ShippingMethodExpress", 
                      "USPSExpressMail","UPSNextDayAir", "UPS2DayAirAM", "Other", "LocalDelivery", "NotSelected", 
                      "InternationalNotSelected","StandardInternational", "ExpeditedInternational", "USPSGlobalExpress", 
                      "USPSGlobalPriority","USPSEconomyParcel", "USPSEconomyLetter", "USPSAirmailLetter", 
                      "USPSAirmailParcel","UPSWorldWideExpressPlus", "UPSWorldWideExpress", "UPSWorldWideExpedited", 
                      "UPSStandardToCanada","OtherInternational", "AT_StandardDispatch", "AT_InsuredDispatch", 
                      "AT_Writing","AT_COD", "AT_ExpressOrCourier", "AT_InsuredExpressOrCourier", 
                      "AT_SpecialDispatch","AT_InsuredSpecialDispatch", "AT_Sonstige", 
                      "AT_UnversicherterVersandInternational","AT_VersicherterVersandInternational", "AT_SonstigerVersandInternational", 
                      "AT_UnversicherterExpressVersandInternational","AT_VersicherterExpressVersandInternational", "AU_Regular", "AU_Express", 
                      "AU_Registered","AU_Courier", "AU_Other", "AU_EMSInternationalCourierParcels", 
                      "AU_EMSInternationalCourierDocuments","AU_ExpressPostInternationalDocuments", "AU_AirMailInternational", 
                      "AU_EconomyAirInternational","AU_SeaMailInternational", "AU_StandardInternational", 
                      "AU_ExpeditedInternational","AU_OtherInternational", "BEFR_StandardDelivery", "BEFR_PriorityDelivery", 
                      "BEFR_ParcelPost","BEFR_RegisteredMail", "BEFR_Other", "BEFR_DePostInternational", 
                      "BEFR_UPSInternational","BEFR_FedExInternational", "BEFR_DHLInternational", 
                      "BEFR_TPGPostTNTInternational","BEFR_StandardInternational", "BEFR_ExpeditedInternational", 
                      "BEFR_OtherInternational","BEFR_LaPosteInternational", "BENL_StandardDelivery", "BENL_PriorityDelivery", 
                      "BENL_ParcelPost","BENL_RegisteredMail", "BENL_Other", "BENL_DePostInternational", 
                      "BENL_UPSInternational","BENL_FedExInternational", "BENL_DHLInternational", 
                      "BENL_TPGPostTNTInternational","BENL_StandardInternational", "BENL_ExpeditedInternational", 
                      "BENL_OtherInternational","BENL_LaPosteInternational", "CA_StandardDelivery", "CA_ExpeditedDelivery", 
                      "CA_PostLettermail","CA_PostRegularParcel", "CA_PostExpeditedParcel", "CA_PostXpresspost", 
                      "CA_PostPriorityCourier","CA_StandardInternational", "CA_ExpeditedInternational", 
                      "CA_OtherInternational","CA_PostExpeditedParcelUSA", "CA_PostSmallPacketsUSA", "CA_PostXpresspostUSA", 
                      "CA_PostXpresspostInternational","CA_PostInternationalParcelSurface", "CA_PostInternationalParcelAir", 
                      "CA_SmallPacketsInternational","CA_PurolatorInternational", "CA_PostSmallPacketsUSAGround", 
                      "CA_PostSmallPacketsUSAAir","CA_SmallPacketsInternationalGround", "CA_SmallPacketsInternationalAir", 
                      "CA_PostUSALetterPost","CA_PostInternationalLetterPost", "CA_UPSExpressCanada", 
                      "CA_UPSExpressSaverCanada","CA_UPSExpeditedCanada", "CA_UPSStandardCanada", "CA_UPSExpressUnitedStates", 
                      "CA_UPSExpeditedUnitedStates","CA_UPS3DaySelectUnitedStates", "CA_UPSStandardUnitedStates", 
                      "CA_UPSWorldWideExpress","CA_UPSWorldWideExpedited", "CH_StandardDispatchAPost", 
                      "CH_StandardDispatchBPost","CH_InsuredDispatch", "CH_Writing", "CH_COD", "CH_ExpressOrCourier", 
                      "CH_InsuredExpressOrCourier","CH_SpecialDispatch", "CH_InsuredSpecialDispatch", "CH_Sonstige", 
                      "CH_SonstigerVersandInternational","CH_EconomySendungenInternational", "CH_PrioritySendungenInternational", 
                      "CH_UrgentSendungenInternational","CN_PersonalDelivery", "CN_RegularPackage", "CN_DeliveryCompanyExpress", 
                      "CN_PostOfficeExpress","CN_Others", "CN_FastPostOffice", "CN_ExpressDeliverySameCity", 
                      "CN_ExpressDeliveryOtherCities","CN_StandardInternational", "CN_ExpeditedInternational", 
                      "CN_OtherInternational","CN_CODInternational", "CN_StandardMailingInternational", 
                      "CN_RegularLogisticsInternational","CN_EMSInternational", "CN_OthersInternational", "DE_StandardDispatch", 
                      "DE_InsuredDispatch","DE_Writing", "DE_COD", "DE_ExpressOrCourier", "DE_InsuredExpressOrCourier", 
                      "DE_SpecialDispatch","DE_InsuredSpecialDispatch", "DE_UnversicherterVersand", 
                      "DE_DeutschePostBrief","DE_DHLPostpaket", "DE_DHLPackchen", "DE_DeutschePostWarensendung", 
                      "DE_DeutschePostBuchersendung","DE_HermesPaketUnversichert", "DE_HermesPaketVersichert", 
                      "DE_IloxxTransportXXL","DE_IloxxUbernachtExpress", "DE_IloxxStandard", "DE_Sonstige", 
                      "DE_UnversicherterVersandInternational","DE_VersicherterVersandInternational", "DE_DHLPostpaketInternational", 
                      "DE_DHLPackchenInternational","DE_SonstigerVersandInternational", 
                      "DE_UnversicherterExpressVersandInternational","DE_VersicherterExpressVersandInternational", 
                      "DE_DeutschePostBriefLandInternational","DE_DeutschePostBriefLuftInternational", "DE_IloxxEuropaInternational", 
                      "DE_IloxxWorldWideInternational","ES_CartasNacionalesHasta20", "ES_CartasNacionalesDeMas20", 
                      "ES_CartasInternacionalesHasta20","ES_CartasInternacionalesDeMas20", "ES_PaqueteAzulHasta2kg", 
                      "ES_PaqueteAzulDeMas2kg","ES_PaqueteInternacionalEconomico", "ES_Urgente", "ES_Otros", 
                      "ES_StandardInternational","ES_ExpeditedInternational", "ES_OtherInternational", 
                      "ES_CartasPostalInternational","ES_EmsPostalExpressInternational", "ES_EconomyPacketInternational", 
                      "FR_ChronoposteInternationalClassic","FR_ColiposteColissimoDirect", "FR_DHLExpressEuropack", "FR_UPSStandard", 
                      "FR_PostOfficeLetter","FR_PostOfficeLetterFollowed", "FR_PostOfficeLetterRecommended", 
                      "FR_ColiposteColissimo","FR_ColiposteColissimoRecommended", "FR_UPSStandardAgainstRefund", "FR_Autre", 
                      "FR_Ecopli","FR_Colieco", "FR_AuteModeDenvoiDeColis", "FR_RemiseEnMainPropre", 
                      "FR_StandardInternational","FR_ExpeditedInternational", "FR_OtherInternational", 
                      "FR_LaPosteInternationalPriorityCourier","FR_LaPosteInternationalEconomyCourier", "FR_LaPosteColissimoInternational", 
                      "FR_LaPosteColisEconomiqueInternational","FR_LaPosteColissimoEmballageInternational", 
                      "FR_ChronopostClassicInternational","FR_ChronopostPremiumInternational", "FR_UPSStandardInternational", 
                      "FR_UPSExpressInternational","FR_DHLInternational", "IN_Regular", "IN_Express", "IN_NationalCOD", 
                      "IN_Courier","IN_LocalCOD", "IN_StandardInternational", "IN_ExpeditedInternational", 
                      "IN_OtherInternational","IN_FlatRateCOD", "IN_BuyerPicksUpAndPays", "IT_RegularMail", 
                      "IT_PriorityMail","IT_MailRegisteredLetter", "IT_MailRegisteredLetterWithMark", 
                      "IT_InsuredMail","IT_QuickMail", "IT_RegularPackage", "IT_QuickPackage1", "IT_QuickPackage3", 
                      "IT_ExpressCourier","IT_StandardInternational", "IT_ExpeditedInternational", 
                      "IT_OtherInternational","NL_StandardDelivery", "NL_ParcelPost", "NL_RegisteredMail", "NL_Other", 
                      "NL_TPGPostTNTInternational","NL_UPSInternational", "NL_FedExInternational", "NL_DHLInternational", 
                      "NL_DPDGBRInternational","NL_GLSBusinessInternational", "NL_StandardInternational", 
                      "NL_ExpeditedInternational","NL_OtherInternational", "TW_RegisteredMail", "TW_UnregisteredMail", "TW_COD", 
                      "TW_DwellingMatchPost","TW_DwellingMatchCOD", "TW_SelfPickup", "TW_ParcelPost", "TW_ExpressMail", 
                      "TW_Other","TW_CPInternationalLetterPost", "TW_CPInternationalParcelPost", 
                      "TW_CPInternationalRegisteredLetterPost","TW_CPInternationalRegisteredParcelPost", "TW_CPInternationalEMS", 
                      "TW_CPInternationalOceanShippingParcel","TW_FedExInternationalPriority", "TW_FedExInternationalEconomy", 
                      "TW_UPSWorldwideExpedited","TW_UPSWorldwideExpress", "TW_UPSWorldwideExpressPlus", 
                      "TW_OtherInternational","UK_RoyalMailFirstClassStandard", "UK_RoyalMailSecondClassStandard", 
                      "UK_RoyalMailFirstClassRecorded","UK_RoyalMailSecondClassRecorded", "UK_RoyalMailSpecialDelivery", 
                      "UK_RoyalMailStandardParcel","UK_Parcelforce24", "UK_Parcelforce48", "UK_OtherCourier", 
                      "UK_SellersStandardRate","UK_CollectInPerson", "UK_SellersStandardInternationalRate", 
                      "UK_RoyalMailAirmailInternational","UK_RoyalMailAirsureInternational", "UK_RoyalMailSurfaceMailInternational", 
                      "UK_RoyalMailInternationalSignedFor","UK_RoyalMailHMForcesMailInternational", 
                      "UK_ParcelForceInternationalDatapost","UK_ParcelForceIreland24International", "UK_ParcelForceEuro48International", 
                      "UK_ParcelForceInternationalScheduled","UK_OtherCourierOrDeliveryInternational", "UK_CollectInPersonInternational", 
                      "IE_SellersStandardRate","IE_FirstClassLetterService", "IE_SwiftPostNational", "IE_RegisteredPost", 
                      "IE_EMSSDSCourier","IE_EconomySDSCourier", "IE_OtherCourier", "IE_CollectionInPerson", 
                      "IE_SellersStandardRateInternational","IE_InternationalEconomyService", "IE_InternationalPriorityService", 
                      "IE_SwiftPostExpressInternational","IE_SwiftPostInternational", "IE_EMSSDSCourierInternational", 
                      "IE_EconomySDSCourierInternational","IE_OtherCourierInternational", "IE_CollectionInPersonInternational", 
                      "PL_DomesticRegular","PL_DomesticSpecial", "FreightShipping", "FreightShippingInternational", 
                      "USPSGround","ShippingMethodOvernight", "CustomCode", "USPSPriorityFlatRateEnvelope", 
                      "USPSPriorityFlatRateBox","USPSGlobalPrioritySmallEnvelope", "USPSGlobalPriorityLargeEnvelope", 
                      "USPSExpressFlatRateEnvelope","UPSWorldWideExpressBox10kg", "UPSWorldWideExpressBox25kg", 
                      "UPSWorldWideExpressPlusBox10kg","UPSWorldWideExpressPlusBox25kg", "HK_LocalPickUpOnly", "HK_LocalCourier", 
                      "HK_DomesticRegularShipping","HK_DomesticSpecialShipping", "HK_InternationalRegularShipping", 
                      "HK_InternationalSpecialShipping","SG_LocalPickUpOnly", "SG_LocalCourier", "SG_DomesticStandardMail", 
                      "SG_DomesticNonStandardMail","SG_DomesticSpeedpostIslandwide", "SG_InternationalStandardMail", 
                      "SG_InternationalExpressMailService","SG_InternationalCourier", "BENL_DePostZendingNONPRIOR", 
                      "BENL_DePostZendingPRIOR","BENL_DePostZendingAangetekend", "BENL_KilopostPakje", "BENL_Taxipost", 
                      "BENL_KialaAfhaalpunt","BENL_VasteKostenStandaardVerzending", "BENL_VasteKostenVersneldeVerzending", 
                      "BENL_VerzekerdeVerzending","BEFR_LaPosteEnvoiNONPRIOR", "BEFR_LaPosteEnvoiPRIOR", 
                      "BEFR_LaPosteEnvoiRecommande","BEFR_PaquetKilopost", "BEFR_Taxipost", "BEFR_PointRetraitKiala", 
                      "BEFR_LivraisonStandardPrixforFaitaire","BEFR_LivraisonExpressPrixforFaitaire", "BEFR_LivraisonSecurise", 
                      "BENL_DePostZendingPRIORInternational","BENL_DePostZendingNONPRIORInternational", 
                      "BENL_DePostZendingAangetekendInternational","BENL_KilopostPakjeInternational", "BENL_TaxipostExpressverzending", 
                      "BENL_VerzekerdeVerzendingInternational","BEFR_LaPosteenvoiePRIOR", "BEFR_LaPosteenvoieNONPRIOR", 
                      "BEFR_LaPosteenvoieRecommande","BEFR_PaquetKilopostInternationale", "BEFR_ExpressTaxipost", 
                      "BEFR_LivraisonStandardInternationalePrixforFaitaire","BEFR_LivraisonExpressInternationalePrixforFaitaire", 
                      "BEFR_LivraisonSecuriseInternational","FR_Chronopost", "UK_RoyalMailSpecialDeliveryNextDay", 
                      "CA_PostLightPacketInternational","CA_PostLightPacketUSA", "PL_DHLInternational", "PL_InternationalRegular", 
                      "PL_InternationalSpecial","PL_UPSInternational", "CAFR_StandardDelivery", "CAFR_ExpeditedDelivery", 
                      "CAFR_PostLettermail","CAFR_PostRegularParcel", "CAFR_PostExpeditedParcel", "CAFR_PostXpresspost", 
                      "CAFR_PostPriorityCourier","CAFR_StandardInternational", "CAFR_ExpeditedInternational", 
                      "CAFR_OtherInternational","CAFR_PostExpeditedParcelUSA", "CAFR_PostSmallPacketsUSA", 
                      "CAFR_PostXpresspostUSA","CAFR_PostXpresspostInternational", "CAFR_PostInternationalParcelSurface", 
                      "CAFR_PostInternationalParcelAir","CAFR_SmallPacketsInternational", "CAFR_PurolatorInternational", 
                      "CAFR_PostSmallPacketsUSAGround","CAFR_PostSmallPacketsUSAAir", "CAFR_SmallPacketsInternationalGround", 
                      "CAFR_SmallPacketsInternationalAir","CAFR_PostUSALetterPost", "CAFR_PostInternationalLetterPost", 
                      "CAFR_UPSExpressCanada","CAFR_UPSExpressSaverCanada", "CAFR_UPSExpeditedCanada", 
                      "CAFR_UPSStandardCanada","CAFR_UPSExpressUnitedStates", "CAFR_UPSExpeditedUnitedStates", 
                      "CAFR_UPS3DaySelectUnitedStates","CAFR_UPSStandardUnitedStates", "CAFR_UPSWorldWideExpress", 
                      "CAFR_UPSWorldWideExpedited","UK_RoyalMailSpecialDelivery9am", "USPSFirstClassMailInternational", 
                      "USPSPriorityMailInternational","USPSExpressMailInternational"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Description:{name:"Description", type:"string", xmlRequired:false},
                ExpeditedService:{name:"ExpeditedService", type:"boolean", xmlRequired:false},
                InternationalService:{name:"InternationalService", type:"boolean", xmlRequired:false},
                ShippingService:{name:"ShippingService", type:"token", xmlRequired:false},
                ShippingServiceID:{name:"ShippingServiceID", type:"int", xmlRequired:false},
                ShippingTimeMax:{name:"ShippingTimeMax", type:"int", xmlRequired:false},
                ShippingTimeMin:{name:"ShippingTimeMin", type:"int", xmlRequired:false},
                ShippingServiceCode:{name:"ShippingServiceCode", type:"ShippingServiceCodeType", xmlRequired:false}
            },
            ID:"ShippingServiceDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ShippingInsuranceCost:{name:"ShippingInsuranceCost", type:"AmountType", xmlRequired:false},
                ShippingService:{name:"ShippingService", type:"token", xmlRequired:false},
                ShippingServiceCost:{name:"ShippingServiceCost", type:"AmountType", xmlRequired:false},
                ShippingServiceAdditionalCost:{name:"ShippingServiceAdditionalCost", type:"AmountType", xmlRequired:false},
                ShippingServicePriority:{name:"ShippingServicePriority", type:"int", xmlRequired:false},
                ExpeditedService:{name:"ExpeditedService", type:"boolean", xmlRequired:false},
                ShippingTimeMin:{name:"ShippingTimeMin", type:"int", xmlRequired:false},
                ShippingTimeMax:{name:"ShippingTimeMax", type:"int", xmlRequired:false},
                ShippingSurcharge:{name:"ShippingSurcharge", type:"AmountType", xmlRequired:false}
            },
            ID:"ShippingServiceOptionsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ShippingTermRequiredDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"ShippingTypeCodeType",
            valueMap:["Flat", "Calculated", "Freight", "Free", "NotSpecified", 
                      "FlatDomesticCalculatedInternational","CalculatedDomesticFlatInternational", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SiteCodeType",
            valueMap:["US", "Canada", "UK", "Australia", "Austria", "Belgium_French", "France", "Germany", 
                      "Italy","Belgium_Dutch", "Netherlands", "Spain", "Switzerland", "Taiwan", 
                      "eBayMotors","HongKong", "Singapore", "India", "China", "Ireland", "Malaysia", 
                      "Philippines","Poland", "Sweden", "CustomCode", "CanadaFrench"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ListingDuration:{name:"ListingDuration", type:"ListingDurationReferenceType", xmlRequired:false},
                ShippingTermsRequired:{name:"ShippingTermsRequired", type:"boolean", xmlRequired:false},
                BestOfferEnabled:{name:"BestOfferEnabled", type:"boolean", xmlRequired:false},
                DutchBINEnabled:{name:"DutchBINEnabled", type:"boolean", xmlRequired:false},
                UserConsentRequired:{name:"UserConsentRequired", type:"boolean", xmlRequired:false},
                HomePageFeaturedEnabled:{name:"HomePageFeaturedEnabled", type:"boolean", xmlRequired:false},
                ProPackEnabled:{name:"ProPackEnabled", type:"boolean", xmlRequired:false},
                BasicUpgradePackEnabled:{name:"BasicUpgradePackEnabled", type:"boolean", xmlRequired:false},
                ValuePackEnabled:{name:"ValuePackEnabled", type:"boolean", xmlRequired:false},
                ProPackPlusEnabled:{name:"ProPackPlusEnabled", type:"boolean", xmlRequired:false},
                AdFormatEnabled:{name:"AdFormatEnabled", type:"AdFormatEnabledCodeType", xmlRequired:false},
                DigitalDeliveryEnabled:{name:"DigitalDeliveryEnabled", type:"DigitalDeliveryEnabledCodeType", 
                                        xmlRequired:false},
                BestOfferCounterEnabled:{name:"BestOfferCounterEnabled", type:"boolean", xmlRequired:false},
                BestOfferAutoDeclineEnabled:{name:"BestOfferAutoDeclineEnabled", type:"boolean", xmlRequired:false},
                LocalMarketSpecialitySubscription:{name:"LocalMarketSpecialitySubscription", type:"boolean", xmlRequired:false},
                LocalMarketRegularSubscription:{name:"LocalMarketRegularSubscription", type:"boolean", xmlRequired:false},
                LocalMarketPremiumSubscription:{name:"LocalMarketPremiumSubscription", type:"boolean", xmlRequired:false},
                LocalMarketNonSubscription:{name:"LocalMarketNonSubscription", type:"boolean", xmlRequired:false},
                ExpressEnabled:{name:"ExpressEnabled", type:"boolean", xmlRequired:false},
                ExpressPicturesRequired:{name:"ExpressPicturesRequired", type:"boolean", xmlRequired:false},
                ExpressConditionRequired:{name:"ExpressConditionRequired", type:"boolean", xmlRequired:false},
                MinimumReservePrice:{name:"MinimumReservePrice", type:"double", xmlRequired:false},
                SellerContactDetailsEnabled:{name:"SellerContactDetailsEnabled", type:"boolean", xmlRequired:false},
                TransactionConfirmationRequestEnabled:{name:"TransactionConfirmationRequestEnabled", type:"boolean", xmlRequired:false},
                StoreInventoryEnabled:{name:"StoreInventoryEnabled", type:"boolean", xmlRequired:false},
                SkypeMeTransactionalEnabled:{name:"SkypeMeTransactionalEnabled", type:"boolean", xmlRequired:false},
                SkypeMeNonTransactionalEnabled:{name:"SkypeMeNonTransactionalEnabled", type:"boolean", xmlRequired:false},
                LocalListingDistancesRegular:{name:"LocalListingDistancesRegular", type:"string", xmlRequired:false},
                LocalListingDistancesSpecialty:{name:"LocalListingDistancesSpecialty", type:"string", xmlRequired:false},
                LocalListingDistancesNonSubscription:{name:"LocalListingDistancesNonSubscription", type:"string", xmlRequired:false},
                ClassifiedAdPaymentMethodEnabled:{name:"ClassifiedAdPaymentMethodEnabled", 
                                                  type:"ClassifiedAdPaymentMethodEnabledCodeType",xmlRequired:false},
                ClassifiedAdShippingMethodEnabled:{name:"ClassifiedAdShippingMethodEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdBestOfferEnabled:{name:"ClassifiedAdBestOfferEnabled", type:"ClassifiedAdBestOfferEnabledCodeType", 
                                              xmlRequired:false},
                ClassifiedAdCounterOfferEnabled:{name:"ClassifiedAdCounterOfferEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdAutoDeclineEnabled:{name:"ClassifiedAdAutoDeclineEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdContactByPhoneEnabled:{name:"ClassifiedAdContactByPhoneEnabled", type:"boolean", xmlRequired:false},
                ClassifiedAdContactByEmailEnabled:{name:"ClassifiedAdContactByEmailEnabled", type:"boolean", xmlRequired:false},
                SafePaymentRequired:{name:"SafePaymentRequired", type:"boolean", xmlRequired:false},
                ClassifiedAdPayPerLeadEnabled:{name:"ClassifiedAdPayPerLeadEnabled", type:"boolean", xmlRequired:false}
            },
            ID:"SiteDefaultsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Site:{name:"Site", type:"SiteCodeType", xmlRequired:false},
                SiteID:{name:"SiteID", type:"int", xmlRequired:false}
            },
            ID:"SiteDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SiteIDFilterCodeType",
            valueMap:["ListedInCurrencyImplied", "LocatedInCountryImplied", "AvailableInCountryImplied", 
                      "SiteImplied","BelgiumListing", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SiteID:{name:"SiteID", type:"SiteIDFilterCodeType", xmlRequired:false}
            },
            ID:"SiteLocationType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CharacteristicsSet:{name:"CharacteristicsSet", type:"CharacteristicsSetType", xmlRequired:false},
                ExcludeCategoryID:{name:"ExcludeCategoryID", type:"string", xmlRequired:false}
            },
            ID:"SiteWideCharacteristicsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SkypeContactOptionCodeType",
            valueMap:["Chat", "Voice", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"SkypeMeNonTransactionalEnabledDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"SkypeMeTransactionalEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SortOrderCodeType",
            valueMap:["Ascending", "Descending", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                MatchingItemCount:{name:"MatchingItemCount", type:"int", xmlRequired:false},
                Text:{name:"Text", type:"string", xmlRequired:false}
            },
            ID:"SpellingSuggestionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreCategoryUpdateActionCodeType",
            valueMap:["Add", "Delete", "Move", "Rename", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ColorScheme:{name:"ColorScheme", type:"StoreColorSchemeType", xmlRequired:false}
            },
            ID:"StoreColorSchemeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ColorSchemeID:{name:"ColorSchemeID", type:"int", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                Color:{name:"Color", type:"StoreColorType", xmlRequired:false},
                Font:{name:"Font", type:"StoreFontType", xmlRequired:false}
            },
            ID:"StoreColorSchemeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Primary:{name:"Primary", type:"string", xmlRequired:false},
                Secondary:{name:"Secondary", type:"string", xmlRequired:false},
                Accent:{name:"Accent", type:"string", xmlRequired:false}
            },
            ID:"StoreColorType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CustomCategory:{name:"CustomCategory", type:"StoreCustomCategoryType", xmlRequired:false}
            },
            ID:"StoreCustomCategoryArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                CategoryID:{name:"CategoryID", type:"long", xmlRequired:true},
                Name:{name:"Name", type:"string", xmlRequired:false},
                Order:{name:"Order", type:"int", xmlRequired:true},
                ChildCategory:{name:"ChildCategory", type:"StoreCustomCategoryType", xmlRequired:false}
            },
            ID:"StoreCustomCategoryType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreCustomHeaderLayoutCodeType",
            valueMap:["NoHeader", "CustomHeaderShown", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreCustomListingHeaderDisplayCodeType",
            valueMap:["None", "Full", "FullAndLeftNavigationBar", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreCustomListingHeaderLinkCodeType",
            valueMap:["None", "AboutMePage", "CustomPage", "CustomCategory", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                LinkID:{name:"LinkID", type:"int", xmlRequired:true},
                Order:{name:"Order", type:"int", xmlRequired:true},
                LinkType:{name:"LinkType", type:"StoreCustomListingHeaderLinkCodeType", xmlRequired:false}
            },
            ID:"StoreCustomListingHeaderLinkType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                DisplayType:{name:"DisplayType", type:"StoreCustomListingHeaderDisplayCodeType", 
                             xmlRequired:false},
                Logo:{name:"Logo", type:"boolean", xmlRequired:false},
                SearchBox:{name:"SearchBox", type:"boolean", xmlRequired:false},
                LinkToInclude:{name:"LinkToInclude", type:"StoreCustomListingHeaderLinkType", 
                               xmlRequired:false},
                AddToFavoriteStores:{name:"AddToFavoriteStores", type:"boolean", xmlRequired:false},
                SignUpForStoreNewsletter:{name:"SignUpForStoreNewsletter", type:"boolean", xmlRequired:false}
            },
            ID:"StoreCustomListingHeaderType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CustomPage:{name:"CustomPage", type:"StoreCustomPageType", xmlRequired:false}
            },
            ID:"StoreCustomPageArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreCustomPageStatusCodeType",
            valueMap:["Active", "Delete", "Inactive", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                PageID:{name:"PageID", type:"long", xmlRequired:false},
                URLPath:{name:"URLPath", type:"string", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                Status:{name:"Status", type:"StoreCustomPageStatusCodeType", xmlRequired:false},
                Content:{name:"Content", type:"string", xmlRequired:false},
                LeftNav:{name:"LeftNav", type:"boolean", xmlRequired:false},
                PreviewEnabled:{name:"PreviewEnabled", type:"boolean", xmlRequired:false},
                Order:{name:"Order", type:"int", xmlRequired:false}
            },
            ID:"StoreCustomPageType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreFontFaceCodeType",
            valueMap:["Arial", "Courier", "Times", "Verdana", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreFontSizeCodeType",
            valueMap:["XXS", "XS", "S", "M", "L", "XL", "XXL", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                NameFace:{name:"NameFace", type:"StoreFontFaceCodeType", xmlRequired:false},
                NameSize:{name:"NameSize", type:"StoreFontSizeCodeType", xmlRequired:false},
                NameColor:{name:"NameColor", type:"string", xmlRequired:false},
                TitleFace:{name:"TitleFace", type:"StoreFontFaceCodeType", xmlRequired:false},
                TitleSize:{name:"TitleSize", type:"StoreFontSizeCodeType", xmlRequired:false},
                TitleColor:{name:"TitleColor", type:"string", xmlRequired:false},
                DescFace:{name:"DescFace", type:"StoreFontFaceCodeType", xmlRequired:false},
                DescSize:{name:"DescSize", type:"StoreFontSizeCodeType", xmlRequired:false},
                DescColor:{name:"DescColor", type:"string", xmlRequired:false}
            },
            ID:"StoreFontType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreHeaderStyleCodeType",
            valueMap:["Full", "Minimized", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"StoreInventoryEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreItemListLayoutCodeType",
            valueMap:["ListView", "GalleryView", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreItemListSortOrderCodeType",
            valueMap:["EndingFirst", "NewlyListed", "LowestPriced", "HighestPriced", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Logo:{name:"Logo", type:"StoreLogoType", xmlRequired:false}
            },
            ID:"StoreLogoArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                LogoID:{name:"LogoID", type:"int", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false}
            },
            ID:"StoreLogoType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                VacationPreferences:{name:"VacationPreferences", type:"StoreVacationPreferencesType", 
                                     xmlRequired:false}
            },
            ID:"StorePreferencesType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreSearchCodeType",
            valueMap:["AllItemsInTheStore", "AuctionItemsInTheStore", "BuyItNowItemsInTheStore", 
                      "BuyItNowItemsInAllStores","CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Subscription:{name:"Subscription", type:"StoreSubscriptionType", xmlRequired:false}
            },
            ID:"StoreSubscriptionArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StoreSubscriptionLevelCodeType",
            valueMap:["Close", "Basic", "Featured", "Anchor", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Level:{name:"Level", type:"StoreSubscriptionLevelCodeType", xmlRequired:false},
                Fee:{name:"Fee", type:"AmountType", xmlRequired:false}
            },
            ID:"StoreSubscriptionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Theme:{name:"Theme", type:"StoreThemeType", xmlRequired:false},
                GenericColorSchemeArray:{name:"GenericColorSchemeArray", type:"StoreColorSchemeArrayType", 
                                         xmlRequired:false}
            },
            ID:"StoreThemeArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ThemeID:{name:"ThemeID", type:"int", xmlRequired:false},
                Name:{name:"Name", type:"string", xmlRequired:false},
                ColorScheme:{name:"ColorScheme", type:"StoreColorSchemeType", xmlRequired:false}
            },
            ID:"StoreThemeType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Name:{name:"Name", type:"string", xmlRequired:false},
                URLPath:{name:"URLPath", type:"string", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false},
                SubscriptionLevel:{name:"SubscriptionLevel", type:"StoreSubscriptionLevelCodeType", 
                                   xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false},
                Logo:{name:"Logo", type:"StoreLogoType", xmlRequired:false},
                Theme:{name:"Theme", type:"StoreThemeType", xmlRequired:false},
                HeaderStyle:{name:"HeaderStyle", type:"StoreHeaderStyleCodeType", xmlRequired:false},
                HomePage:{name:"HomePage", type:"long", xmlRequired:false},
                ItemListLayout:{name:"ItemListLayout", type:"StoreItemListLayoutCodeType", xmlRequired:false},
                ItemListSortOrder:{name:"ItemListSortOrder", type:"StoreItemListSortOrderCodeType", 
                                   xmlRequired:false},
                CustomHeaderLayout:{name:"CustomHeaderLayout", type:"StoreCustomHeaderLayoutCodeType", 
                                    xmlRequired:false},
                CustomHeader:{name:"CustomHeader", type:"string", xmlRequired:false},
                ExportListings:{name:"ExportListings", type:"boolean", xmlRequired:false},
                CustomCategories:{name:"CustomCategories", type:"StoreCustomCategoryArrayType", xmlRequired:false},
                CustomListingHeader:{name:"CustomListingHeader", type:"StoreCustomListingHeaderType", 
                                     xmlRequired:false},
                MerchDisplay:{name:"MerchDisplay", type:"MerchDisplayCodeType", xmlRequired:false},
                LastOpenedTime:{name:"LastOpenedTime", type:"dateTime", xmlRequired:false}
            },
            ID:"StoreType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                OnVacation:{name:"OnVacation", type:"boolean", xmlRequired:false},
                ReturnDate:{name:"ReturnDate", type:"dateTime", xmlRequired:false},
                HideFixedPriceStoreItems:{name:"HideFixedPriceStoreItems", type:"boolean", xmlRequired:false},
                MessageItem:{name:"MessageItem", type:"boolean", xmlRequired:false},
                MessageStore:{name:"MessageStore", type:"boolean", xmlRequired:false},
                DisplayMessageStoreCustomText:{name:"DisplayMessageStoreCustomText", type:"boolean", xmlRequired:false},
                MessageStoreCustomText:{name:"MessageStoreCustomText", type:"string", xmlRequired:false}
            },
            ID:"StoreVacationPreferencesType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                StoreCategoryID:{name:"StoreCategoryID", type:"long", xmlRequired:true},
                StoreCategory2ID:{name:"StoreCategory2ID", type:"long", xmlRequired:true},
                StoreURL:{name:"StoreURL", type:"anyURI", xmlRequired:false},
                StoreName:{name:"StoreName", type:"string", xmlRequired:false}
            },
            ID:"StorefrontType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"StringMatchCodeType",
            valueMap:["CustomCode", "StartsWith", "Contains"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EIASToken:{name:"EIASToken", type:"string", xmlRequired:false},
                SiteID:{name:"SiteID", type:"SiteCodeType", xmlRequired:false},
                Active:{name:"Active", type:"boolean", xmlRequired:false}
            },
            ID:"SubscriptionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                SuggestedCategory:{name:"SuggestedCategory", type:"SuggestedCategoryType", xmlRequired:false}
            },
            ID:"SuggestedCategoryArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Category:{name:"Category", type:"CategoryType", xmlRequired:false},
                PercentItemFound:{name:"PercentItemFound", type:"int", xmlRequired:true}
            },
            ID:"SuggestedCategoryType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EventType:{name:"EventType", type:"NotificationEventTypeCodeType", xmlRequired:false},
                SummaryPeriod:{name:"SummaryPeriod", type:"SummaryWindowPeriodCodeType", xmlRequired:false},
                Frequency:{name:"Frequency", type:"SummaryFrequencyCodeType", xmlRequired:false}
            },
            ID:"SummaryEventScheduleType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SummaryFrequencyCodeType",
            valueMap:["EverySunday", "EveryMonday", "EveryTuesday", "EveryWednesday", "EveryThursday", 
                      "EveryFriday","EverySaturday", "MonthlyOn1st", "MonthlyOn2nd", "MonthlyOn3rd", 
                      "MonthlyOn4th","MonthlyOn5th", "MonthlyOn6th", "MonthlyOn7th", "MonthlyOn8th", 
                      "MonthlyOn9th","MonthlyOn10th", "MonthlyOn11th", "MonthlyOn12th", "MonthlyOn13th", 
                      "MonthlyOn14th","MonthlyOn15th", "MonthlyOn16th", "MonthlyOn17th", "MonthlyOn18th", 
                      "MonthlyOn19th","MonthlyOn20th", "MonthlyOn21st", "MonthlyOn22nd", "MonthlyOn23rd", 
                      "MonthlyOn24th","MonthlyOn25th", "MonthlyOn26th", "MonthlyOn27th", "MonthlyOn28th", 
                      "MonthlyOn29th","MonthlyOn30th", "MonthlyOn31st", "Every31Days", "Every60Days"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"SummaryWindowPeriodCodeType",
            valueMap:["Last24Hours", "Last7Days", "Last31Days", "CurrentWeek", "LastWeek", "CurrentMonth", 
                      "LastMonth","Last60Days"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                EventType:{name:"EventType", type:"NotificationEventTypeCodeType", xmlRequired:false}
            },
            ID:"SupportedEventTypesArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"TCREnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"TaskStatusCodeType",
            valueMap:["Pending", "InProgress", "Complete", "Failed", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                JurisdictionID:{name:"JurisdictionID", type:"string", xmlRequired:false},
                SalesTaxPercent:{name:"SalesTaxPercent", type:"float", xmlRequired:false},
                ShippingIncludedInTax:{name:"ShippingIncludedInTax", type:"boolean", xmlRequired:false},
                JurisdictionName:{name:"JurisdictionName", type:"string", xmlRequired:false}
            },
            ID:"TaxJurisdictionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                TaxJurisdiction:{name:"TaxJurisdiction", type:"TaxJurisdictionType", xmlRequired:false}
            },
            ID:"TaxTableType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                GroupID:{name:"GroupID", type:"int", xmlRequired:false},
                GroupName:{name:"GroupName", type:"string", xmlRequired:false},
                ThemeID:{name:"ThemeID", type:"int", xmlRequired:false},
                ThemeTotal:{name:"ThemeTotal", type:"int", xmlRequired:false}
            },
            ID:"ThemeGroupType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                EventType:{name:"EventType", type:"TicketEventTypeCodeType", xmlRequired:false},
                EventDate:{name:"EventDate", type:"DateType", xmlRequired:false},
                StateOrProvince:{name:"StateOrProvince", type:"string", xmlRequired:false},
                CityName:{name:"CityName", type:"string", xmlRequired:false},
                TicketQuantity:{name:"TicketQuantity", type:"int", xmlRequired:false}
            },
            ID:"TicketDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"TicketEventTypeCodeType",
            valueMap:["Any", "DE_ComedyAndKabarett", "DE_FreizeitAndEvents", "DE_KonzerteAndFestivals", 
                      "DE_KulturAndKlassik","DE_MusicalsAndShows", "DE_Sportveranstaltungen", "DE_Sonstige", 
                      "UK_AmusementParks","UK_Comedy", "UK_ConcertsAndGigs", "UK_ConferencesAndSeminars", 
                      "UK_ExhibitionsAndShows","UK_Experiences", "UK_SportingEvents", "UK_TheatreCinemaAndCircus", 
                      "UK_Other","US_Concerts", "US_Movies", "US_SportingEvents", "US_Theater", "US_Other", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                TimeZoneID:{name:"TimeZoneID", type:"string", xmlRequired:false},
                StandardLabel:{name:"StandardLabel", type:"string", xmlRequired:false},
                StandardOffset:{name:"StandardOffset", type:"string", xmlRequired:false},
                DaylightSavingsLabel:{name:"DaylightSavingsLabel", type:"string", xmlRequired:false},
                DaylightSavingsOffset:{name:"DaylightSavingsOffset", type:"string", xmlRequired:false},
                DaylightSavingsInEffect:{name:"DaylightSavingsInEffect", type:"boolean", xmlRequired:false}
            },
            ID:"TimeZoneDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"TokenReturnMethodCodeType",
            valueMap:["Redirect", "FetchToken", "CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"TradingRoleCodeType",
            valueMap:["Buyer", "Seller", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                Transaction:{name:"Transaction", type:"TransactionType", xmlRequired:false}
            },
            ID:"TransactionArrayType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"TransactionPlatformType",
            valueMap:["eBay", "Express"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                eBayPaymentStatus:{name:"eBayPaymentStatus", type:"PaymentStatusCodeType", xmlRequired:false},
                CheckoutStatus:{name:"CheckoutStatus", type:"CheckoutStatusCodeType", xmlRequired:false},
                LastTimeModified:{name:"LastTimeModified", type:"dateTime", xmlRequired:false},
                PaymentMethodUsed:{name:"PaymentMethodUsed", type:"BuyerPaymentMethodCodeType", xmlRequired:false},
                CompleteStatus:{name:"CompleteStatus", type:"CompleteStatusCodeType", xmlRequired:false},
                BuyerSelectedShipping:{name:"BuyerSelectedShipping", type:"boolean", xmlRequired:false}
            },
            ID:"TransactionStatusType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AmountPaid:{name:"AmountPaid", type:"AmountType", xmlRequired:false},
                AdjustmentAmount:{name:"AdjustmentAmount", type:"AmountType", xmlRequired:false},
                ConvertedAdjustmentAmount:{name:"ConvertedAdjustmentAmount", type:"AmountType", xmlRequired:false},
                Buyer:{name:"Buyer", type:"UserType", xmlRequired:false},
                ShippingDetails:{name:"ShippingDetails", type:"ShippingDetailsType", xmlRequired:false},
                ConvertedAmountPaid:{name:"ConvertedAmountPaid", type:"AmountType", xmlRequired:false},
                ConvertedTransactionPrice:{name:"ConvertedTransactionPrice", type:"AmountType", xmlRequired:false},
                CreatedDate:{name:"CreatedDate", type:"dateTime", xmlRequired:false},
                DepositType:{name:"DepositType", type:"DepositTypeCodeType", xmlRequired:false},
                Item:{name:"Item", type:"ItemType", xmlRequired:false},
                QuantityPurchased:{name:"QuantityPurchased", type:"int", xmlRequired:false},
                Status:{name:"Status", type:"TransactionStatusType", xmlRequired:false},
                TransactionID:{name:"TransactionID", type:"string", xmlRequired:false},
                TransactionPrice:{name:"TransactionPrice", type:"AmountType", xmlRequired:false},
                BestOfferSale:{name:"BestOfferSale", type:"boolean", xmlRequired:false},
                VATPercent:{name:"VATPercent", type:"decimal", xmlRequired:false},
                ExternalTransaction:{name:"ExternalTransaction", type:"ExternalTransactionType", xmlRequired:false},
                SellingManagerProductDetails:{name:"SellingManagerProductDetails", type:"SellingManagerProductDetailsType", 
                                              xmlRequired:false},
                ShippingServiceSelected:{name:"ShippingServiceSelected", type:"ShippingServiceOptionsType", 
                                         xmlRequired:false},
                BuyerMessage:{name:"BuyerMessage", type:"string", xmlRequired:false},
                DutchAuctionBid:{name:"DutchAuctionBid", type:"AmountType", xmlRequired:false},
                BuyerPaidStatus:{name:"BuyerPaidStatus", type:"PaidStatusCodeType", xmlRequired:false},
                SellerPaidStatus:{name:"SellerPaidStatus", type:"PaidStatusCodeType", xmlRequired:false},
                PaidTime:{name:"PaidTime", type:"dateTime", xmlRequired:false},
                ShippedTime:{name:"ShippedTime", type:"dateTime", xmlRequired:false},
                TotalPrice:{name:"TotalPrice", type:"AmountType", xmlRequired:false},
                FeedbackLeft:{name:"FeedbackLeft", type:"FeedbackInfoType", xmlRequired:false},
                FeedbackReceived:{name:"FeedbackReceived", type:"FeedbackInfoType", xmlRequired:false},
                ContainingOrder:{name:"ContainingOrder", type:"OrderType", xmlRequired:false},
                FinalValueFee:{name:"FinalValueFee", type:"AmountType", xmlRequired:false},
                TransactionPlatform:{name:"TransactionPlatform", type:"TransactionPlatformType", xmlRequired:false},
                ListingCheckoutRedirectPreference:{name:"ListingCheckoutRedirectPreference", 
                                                   type:"ListingCheckoutRedirectPreferenceType",xmlRequired:false},
                RefundArray:{name:"RefundArray", type:"RefundArrayType", xmlRequired:false}
            },
            ID:"TransactionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"UPSRateOptionCodeType",
            valueMap:["UPSDailyRates", "UPSOnDemandRates", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                URLType:{name:"URLType", type:"URLTypeCodeType", xmlRequired:false},
                URL:{name:"URL", type:"anyURI", xmlRequired:false}
            },
            ID:"URLDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"URLTypeCodeType",
            valueMap:["ViewItemURL", "ViewUserURL", "MyeBayURL", "MyeBayBiddingURL", "MyeBayNotWonURL", 
                      "MyeBayWonURL","MyeBayWatchingURL", "eBayStoreURL", "SmallLogoURL", "MediumLogoURL", 
                      "LargeLogoURL","CustomCode"]
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"UnitCodeType",
            valueMap:["kg", "lbs", "oz", "cm", "inches", "ft", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"UserConsentRequiredDefinitionType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false}
            },
            ID:"UserIDArrayType"
        })
,
        isc.SimpleType.create({inheritsFrom:"string", name:"UserIDType"})
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ExcludeSellers:{name:"ExcludeSellers", type:"UserIDType", xmlRequired:false},
                IncludeSellers:{name:"IncludeSellers", type:"UserIDType", xmlRequired:false}
            },
            ID:"UserIdFilterType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"UserStatusCodeType",
            valueMap:["Unknown", "Suspended", "Confirmed", "Unconfirmed", "Ghost", "InMaintenance", 
                      "Deleted","CreditCardVerify", "AccountOnHold", "Merged", "RegistrationCodeMailOut", 
                      "TermPending","UnconfirmedHalfOptIn", "CreditCardVerifyHalfOptIn", "UnconfirmedPassport", 
                      "CreditCardVerifyPassport","UnconfirmedExpress", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                AboutMePage:{name:"AboutMePage", type:"boolean", xmlRequired:false},
                EIASToken:{name:"EIASToken", type:"string", xmlRequired:false},
                RESTToken:{name:"RESTToken", type:"string", xmlRequired:false},
                Email:{name:"Email", type:"string", xmlRequired:false},
                FeedbackScore:{name:"FeedbackScore", type:"int", xmlRequired:false},
                UniqueNegativeFeedbackCount:{name:"UniqueNegativeFeedbackCount", type:"int", xmlRequired:false},
                UniquePositiveFeedbackCount:{name:"UniquePositiveFeedbackCount", type:"int", xmlRequired:false},
                PositiveFeedbackPercent:{name:"PositiveFeedbackPercent", type:"float", xmlRequired:false},
                FeedbackPrivate:{name:"FeedbackPrivate", type:"boolean", xmlRequired:false},
                FeedbackRatingStar:{name:"FeedbackRatingStar", type:"FeedbackRatingStarCodeType", xmlRequired:false},
                IDVerified:{name:"IDVerified", type:"boolean", xmlRequired:false},
                eBayGoodStanding:{name:"eBayGoodStanding", type:"boolean", xmlRequired:false},
                NewUser:{name:"NewUser", type:"boolean", xmlRequired:false},
                RegistrationAddress:{name:"RegistrationAddress", type:"AddressType", xmlRequired:false},
                RegistrationDate:{name:"RegistrationDate", type:"dateTime", xmlRequired:false},
                Site:{name:"Site", type:"SiteCodeType", xmlRequired:false},
                Status:{name:"Status", type:"UserStatusCodeType", xmlRequired:false},
                UserID:{name:"UserID", type:"UserIDType", xmlRequired:false},
                UserIDChanged:{name:"UserIDChanged", type:"boolean", xmlRequired:false},
                UserIDLastChanged:{name:"UserIDLastChanged", type:"dateTime", xmlRequired:false},
                VATStatus:{name:"VATStatus", type:"VATStatusCodeType", xmlRequired:false},
                BuyerInfo:{name:"BuyerInfo", type:"BuyerType", xmlRequired:false},
                SellerInfo:{name:"SellerInfo", type:"SellerType", xmlRequired:false},
                CharityAffiliations:{name:"CharityAffiliations", type:"CharityAffiliationsType", xmlRequired:false},
                CharitySeller:{name:"CharitySeller", type:"CharitySellerType", xmlRequired:false},
                PayPalAccountLevel:{name:"PayPalAccountLevel", type:"PayPalAccountLevelCodeType", xmlRequired:false},
                PayPalAccountType:{name:"PayPalAccountType", type:"PayPalAccountTypeCodeType", xmlRequired:false},
                PayPalAccountStatus:{name:"PayPalAccountStatus", type:"PayPalAccountStatusCodeType", 
                                     xmlRequired:false},
                UserSubscription:{name:"UserSubscription", type:"EBaySubscriptionTypeCodeType", xmlRequired:false},
                SiteVerified:{name:"SiteVerified", type:"boolean", xmlRequired:false},
                SkypeID:{name:"SkypeID", type:"string", xmlRequired:false},
                eBayWikiReadOnly:{name:"eBayWikiReadOnly", type:"boolean", xmlRequired:false},
                TUVLevel:{name:"TUVLevel", type:"int", xmlRequired:false},
                VATID:{name:"VATID", type:"string", xmlRequired:false},
                MotorsDealer:{name:"MotorsDealer", type:"boolean", xmlRequired:false},
                SellerPaymentMethod:{name:"SellerPaymentMethod", type:"SellerPaymentMethodCodeType", 
                                     xmlRequired:false},
                BiddingSummary:{name:"BiddingSummary", type:"BiddingSummaryType", xmlRequired:false},
                UserAnonymized:{name:"UserAnonymized", type:"boolean", xmlRequired:false}
            },
            ID:"UserType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                BusinessSeller:{name:"BusinessSeller", type:"boolean", xmlRequired:false},
                RestrictedToBusiness:{name:"RestrictedToBusiness", type:"boolean", xmlRequired:false},
                VATPercent:{name:"VATPercent", type:"float", xmlRequired:false}
            },
            ID:"VATDetailsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"VATStatusCodeType",
            valueMap:["NoVATTax", "VATTax", "VATExempt", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ValueLiteral:{name:"ValueLiteral", type:"string", xmlRequired:false},
                SuggestedValueLiteral:{name:"SuggestedValueLiteral", type:"string", xmlRequired:false},
                ValueID:{name:"ValueID", type:"int", xmlRequired:false}
            },
            ID:"ValType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{},
            ID:"ValuePackEnabledDefinitionType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"VeROItemStatusCodeType",
            valueMap:["Received", "Submitted", "Removed", "SubmissionFailed", "ClarificationRequired", 
                      "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                VeROSiteDetail:{name:"VeROSiteDetail", type:"VeROSiteDetailType", xmlRequired:false}
            },
            ID:"VeROReasonCodeDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                VeROReasonCodeID:{name:"VeROReasonCodeID", type:"long", xmlRequired:false},
                MessageToSeller:{name:"MessageToSeller", type:"string", xmlRequired:false},
                CopyEmailToRightsOwner:{name:"CopyEmailToRightsOwner", type:"boolean", xmlRequired:false}
            },
            ID:"VeROReportItemType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ReportItem:{name:"ReportItem", type:"VeROReportItemType", xmlRequired:false}
            },
            ID:"VeROReportItemsType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"VeROReportPacketStatusCodeType",
            valueMap:["Received", "InProcess", "Processed", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                ReportedItem:{name:"ReportedItem", type:"VeROReportedItemType", xmlRequired:false}
            },
            ID:"VeROReportedItemDetailsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                ItemID:{name:"ItemID", type:"ItemIDType", xmlRequired:false},
                ItemStatus:{name:"ItemStatus", type:"VeROItemStatusCodeType", xmlRequired:false},
                ItemReasonForFailure:{name:"ItemReasonForFailure", type:"string", xmlRequired:false}
            },
            ID:"VeROReportedItemType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                Site:{name:"Site", type:"SiteCodeType", xmlRequired:false},
                ReasonCodeDetail:{name:"ReasonCodeDetail", type:"ReasonCodeDetailType", xmlRequired:false}
            },
            ID:"VeROSiteDetailType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                VerifiedUser:{name:"VerifiedUser", type:"boolean", xmlRequired:false},
                MinimumFeedbackScore:{name:"MinimumFeedbackScore", type:"int", xmlRequired:false}
            },
            ID:"VerifiedUserRequirementsType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                WantItNowPost:{name:"WantItNowPost", type:"WantItNowPostType", xmlRequired:false}
            },
            ID:"WantItNowPostArrayType"
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            fields:{
                CategoryID:{name:"CategoryID", type:"string", xmlRequired:false},
                Description:{name:"Description", type:"string", xmlRequired:false},
                PostID:{name:"PostID", type:"ItemIDType", xmlRequired:false},
                Site:{name:"Site", type:"SiteCodeType", xmlRequired:false},
                StartTime:{name:"StartTime", type:"dateTime", xmlRequired:false},
                ResponseCount:{name:"ResponseCount", type:"int", xmlRequired:false},
                Title:{name:"Title", type:"string", xmlRequired:false}
            },
            ID:"WantItNowPostType"
        })
,
        isc.SimpleType.create({
            inheritsFrom:"token",
            name:"WirelessCarrierIDCodeType",
            valueMap:["Cingular", "TMobile", "Sprint", "Nextel", "Verizon", "CincinnatiBell", "Dobson", 
                      "Alltel","Leap", "USCellular", "Movistar", "Amena", "Vodafone", "ATT", "CustomCode"]
        })
,
        isc.XSComplexType.create({
            mustQualify:true,
            xsdAnyElement:true,
            fields:{
                FileName:{name:"FileName", type:"string", xmlRequired:false},
                FileVersion:{name:"FileVersion", type:"string", xmlRequired:false},
                FileContent:{name:"FileContent", type:"string", xmlRequired:false}
            },
            ID:"XSLFileType"
        })

    ]
})

isc.WebService.create({
    dataURL:"https://api.ebay.com/wsapi",
    serviceNamespace:"urn:ebay:apis:eBLBaseComponents",
    soapStyle:"document",
    operations:[
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddDisputeRequest",
            outputMessage:"AddDisputeResponse",
            name:"AddDispute",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddDisputeResponseRequest",
            outputMessage:"AddDisputeResponseResponse",
            name:"AddDisputeResponse",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddItemRequest",
            outputMessage:"AddItemResponse",
            name:"AddItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddLiveAuctionItemRequest",
            outputMessage:"AddLiveAuctionItemResponse",
            name:"AddLiveAuctionItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddMemberMessageAAQToPartnerRequest",
            outputMessage:"AddMemberMessageAAQToPartnerResponse",
            name:"AddMemberMessageAAQToPartner",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddMemberMessageRTQRequest",
            outputMessage:"AddMemberMessageRTQResponse",
            name:"AddMemberMessageRTQ",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddMemberMessagesAAQToBidderRequest",
            outputMessage:"AddMemberMessagesAAQToBidderResponse",
            name:"AddMemberMessagesAAQToBidder",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddOrderRequest",
            outputMessage:"AddOrderResponse",
            name:"AddOrder",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddSecondChanceItemRequest",
            outputMessage:"AddSecondChanceItemResponse",
            name:"AddSecondChanceItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddToItemDescriptionRequest",
            outputMessage:"AddToItemDescriptionResponse",
            name:"AddToItemDescription",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddToWatchListRequest",
            outputMessage:"AddToWatchListResponse",
            name:"AddToWatchList",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"AddTransactionConfirmationItemRequest",
            outputMessage:"AddTransactionConfirmationItemResponse",
            name:"AddTransactionConfirmationItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ApproveLiveAuctionBiddersRequest",
            outputMessage:"ApproveLiveAuctionBiddersResponse",
            name:"ApproveLiveAuctionBidders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"CompleteSaleRequest",
            outputMessage:"CompleteSaleResponse",
            name:"CompleteSale",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"DeleteMyMessagesRequest",
            outputMessage:"DeleteMyMessagesResponse",
            name:"DeleteMyMessages",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"EndItemRequest",
            outputMessage:"EndItemResponse",
            name:"EndItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"FetchTokenRequest",
            outputMessage:"FetchTokenResponse",
            name:"FetchToken",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetAccountRequest",
            outputMessage:"GetAccountResponse",
            name:"GetAccount",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetAdFormatLeadsRequest",
            outputMessage:"GetAdFormatLeadsResponse",
            name:"GetAdFormatLeads",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetAllBiddersRequest",
            outputMessage:"GetAllBiddersResponse",
            name:"GetAllBidders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetApiAccessRulesRequest",
            outputMessage:"GetApiAccessRulesResponse",
            name:"GetApiAccessRules",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetAttributesCSRequest",
            outputMessage:"GetAttributesCSResponse",
            name:"GetAttributesCS",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetAttributesXSLRequest",
            outputMessage:"GetAttributesXSLResponse",
            name:"GetAttributesXSL",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetBestOffersRequest",
            outputMessage:"GetBestOffersResponse",
            name:"GetBestOffers",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetBidderListRequest",
            outputMessage:"GetBidderListResponse",
            name:"GetBidderList",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCartRequest",
            outputMessage:"GetCartResponse",
            name:"GetCart",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategoriesRequest",
            outputMessage:"GetCategoriesResponse",
            name:"GetCategories",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategory2CSRequest",
            outputMessage:"GetCategory2CSResponse",
            name:"GetCategory2CS",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategory2FinanceOfferRequest",
            outputMessage:"GetCategory2FinanceOfferResponse",
            name:"GetCategory2FinanceOffer",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategoryFeaturesRequest",
            outputMessage:"GetCategoryFeaturesResponse",
            name:"GetCategoryFeatures",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategoryListingsRequest",
            outputMessage:"GetCategoryListingsResponse",
            name:"GetCategoryListings",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCategoryMappingsRequest",
            outputMessage:"GetCategoryMappingsResponse",
            name:"GetCategoryMappings",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetChallengeTokenRequest",
            outputMessage:"GetChallengeTokenResponse",
            name:"GetChallengeToken",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCharitiesRequest",
            outputMessage:"GetCharitiesResponse",
            name:"GetCharities",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetContextualKeywordsRequest",
            outputMessage:"GetContextualKeywordsResponse",
            name:"GetContextualKeywords",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetCrossPromotionsRequest",
            outputMessage:"GetCrossPromotionsResponse",
            name:"GetCrossPromotions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetDescriptionTemplatesRequest",
            outputMessage:"GetDescriptionTemplatesResponse",
            name:"GetDescriptionTemplates",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetDisputeRequest",
            outputMessage:"GetDisputeResponse",
            name:"GetDispute",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetFeedbackRequest",
            outputMessage:"GetFeedbackResponse",
            name:"GetFeedback",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetFinanceOffersRequest",
            outputMessage:"GetFinanceOffersResponse",
            name:"GetFinanceOffers",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetHighBiddersRequest",
            outputMessage:"GetHighBiddersResponse",
            name:"GetHighBidders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetItemRequest",
            outputMessage:"GetItemResponse",
            name:"GetItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetItemRecommendationsRequest",
            outputMessage:"GetItemRecommendationsResponse",
            name:"GetItemRecommendations",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetItemShippingRequest",
            outputMessage:"GetItemShippingResponse",
            name:"GetItemShipping",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetItemTransactionsRequest",
            outputMessage:"GetItemTransactionsResponse",
            name:"GetItemTransactions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetItemsAwaitingFeedbackRequest",
            outputMessage:"GetItemsAwaitingFeedbackResponse",
            name:"GetItemsAwaitingFeedback",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetLiveAuctionBiddersRequest",
            outputMessage:"GetLiveAuctionBiddersResponse",
            name:"GetLiveAuctionBidders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetLiveAuctionCatalogDetailsRequest",
            outputMessage:"GetLiveAuctionCatalogDetailsResponse",
            name:"GetLiveAuctionCatalogDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMemberMessagesRequest",
            outputMessage:"GetMemberMessagesResponse",
            name:"GetMemberMessages",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMessagePreferencesRequest",
            outputMessage:"GetMessagePreferencesResponse",
            name:"GetMessagePreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMyMessagesRequest",
            outputMessage:"GetMyMessagesResponse",
            name:"GetMyMessages",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMyeBayBuyingRequest",
            outputMessage:"GetMyeBayBuyingResponse",
            name:"GetMyeBayBuying",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMyeBayRemindersRequest",
            outputMessage:"GetMyeBayRemindersResponse",
            name:"GetMyeBayReminders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetMyeBaySellingRequest",
            outputMessage:"GetMyeBaySellingResponse",
            name:"GetMyeBaySelling",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetNotificationPreferencesRequest",
            outputMessage:"GetNotificationPreferencesResponse",
            name:"GetNotificationPreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetNotificationsUsageRequest",
            outputMessage:"GetNotificationsUsageResponse",
            name:"GetNotificationsUsage",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetOrderTransactionsRequest",
            outputMessage:"GetOrderTransactionsResponse",
            name:"GetOrderTransactions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetOrdersRequest",
            outputMessage:"GetOrdersResponse",
            name:"GetOrders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetPictureManagerDetailsRequest",
            outputMessage:"GetPictureManagerDetailsResponse",
            name:"GetPictureManagerDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetPictureManagerOptionsRequest",
            outputMessage:"GetPictureManagerOptionsResponse",
            name:"GetPictureManagerOptions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetPopularKeywordsRequest",
            outputMessage:"GetPopularKeywordsResponse",
            name:"GetPopularKeywords",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductFamilyMembersRequest",
            outputMessage:"GetProductFamilyMembersResponse",
            name:"GetProductFamilyMembers",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductFinderRequest",
            outputMessage:"GetProductFinderResponse",
            name:"GetProductFinder",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductFinderXSLRequest",
            outputMessage:"GetProductFinderXSLResponse",
            name:"GetProductFinderXSL",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductSearchPageRequest",
            outputMessage:"GetProductSearchPageResponse",
            name:"GetProductSearchPage",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductSearchResultsRequest",
            outputMessage:"GetProductSearchResultsResponse",
            name:"GetProductSearchResults",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductSellingPagesRequest",
            outputMessage:"GetProductSellingPagesResponse",
            name:"GetProductSellingPages",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetProductsRequest",
            outputMessage:"GetProductsResponse",
            name:"GetProducts",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetPromotionRulesRequest",
            outputMessage:"GetPromotionRulesResponse",
            name:"GetPromotionRules",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetPromotionalSaleDetailsRequest",
            outputMessage:"GetPromotionalSaleDetailsResponse",
            name:"GetPromotionalSaleDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetReturnURLRequest",
            outputMessage:"GetReturnURLResponse",
            name:"GetReturnURL",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetRuNameRequest",
            outputMessage:"GetRuNameResponse",
            name:"GetRuName",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSearchResultsRequest",
            outputMessage:"GetSearchResultsResponse",
            name:"GetSearchResults",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSearchResultsExpressRequest",
            outputMessage:"GetSearchResultsExpressResponse",
            name:"GetSearchResultsExpress",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSellerEventsRequest",
            outputMessage:"GetSellerEventsResponse",
            name:"GetSellerEvents",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSellerListRequest",
            outputMessage:"GetSellerListResponse",
            name:"GetSellerList",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSellerPaymentsRequest",
            outputMessage:"GetSellerPaymentsResponse",
            name:"GetSellerPayments",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSellerTransactionsRequest",
            outputMessage:"GetSellerTransactionsResponse",
            name:"GetSellerTransactions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetShippingDiscountProfilesRequest",
            outputMessage:"GetShippingDiscountProfilesResponse",
            name:"GetShippingDiscountProfiles",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetStoreRequest",
            outputMessage:"GetStoreResponse",
            name:"GetStore",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetStoreCategoryUpdateStatusRequest",
            outputMessage:"GetStoreCategoryUpdateStatusResponse",
            name:"GetStoreCategoryUpdateStatus",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetStoreCustomPageRequest",
            outputMessage:"GetStoreCustomPageResponse",
            name:"GetStoreCustomPage",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetStoreOptionsRequest",
            outputMessage:"GetStoreOptionsResponse",
            name:"GetStoreOptions",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetStorePreferencesRequest",
            outputMessage:"GetStorePreferencesResponse",
            name:"GetStorePreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetSuggestedCategoriesRequest",
            outputMessage:"GetSuggestedCategoriesResponse",
            name:"GetSuggestedCategories",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetTaxTableRequest",
            outputMessage:"GetTaxTableResponse",
            name:"GetTaxTable",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetUserRequest",
            outputMessage:"GetUserResponse",
            name:"GetUser",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetUserContactDetailsRequest",
            outputMessage:"GetUserContactDetailsResponse",
            name:"GetUserContactDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetUserDisputesRequest",
            outputMessage:"GetUserDisputesResponse",
            name:"GetUserDisputes",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetUserPreferencesRequest",
            outputMessage:"GetUserPreferencesResponse",
            name:"GetUserPreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetVeROReasonCodeDetailsRequest",
            outputMessage:"GetVeROReasonCodeDetailsResponse",
            name:"GetVeROReasonCodeDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetVeROReportStatusRequest",
            outputMessage:"GetVeROReportStatusResponse",
            name:"GetVeROReportStatus",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetWantItNowPostRequest",
            outputMessage:"GetWantItNowPostResponse",
            name:"GetWantItNowPost",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GetWantItNowSearchResultsRequest",
            outputMessage:"GetWantItNowSearchResultsResponse",
            name:"GetWantItNowSearchResults",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GeteBayDetailsRequest",
            outputMessage:"GeteBayDetailsResponse",
            name:"GeteBayDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"GeteBayOfficialTimeRequest",
            outputMessage:"GeteBayOfficialTimeResponse",
            name:"GeteBayOfficialTime",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"IssueRefundRequest",
            outputMessage:"IssueRefundResponse",
            name:"IssueRefund",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"LeaveFeedbackRequest",
            outputMessage:"LeaveFeedbackResponse",
            name:"LeaveFeedback",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"PlaceOfferRequest",
            outputMessage:"PlaceOfferResponse",
            name:"PlaceOffer",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"RelistItemRequest",
            outputMessage:"RelistItemResponse",
            name:"RelistItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"RemoveFromWatchListRequest",
            outputMessage:"RemoveFromWatchListResponse",
            name:"RemoveFromWatchList",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"RespondToBestOfferRequest",
            outputMessage:"RespondToBestOfferResponse",
            name:"RespondToBestOffer",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"RespondToFeedbackRequest",
            outputMessage:"RespondToFeedbackResponse",
            name:"RespondToFeedback",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"RespondToWantItNowPostRequest",
            outputMessage:"RespondToWantItNowPostResponse",
            name:"RespondToWantItNowPost",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ReviseCheckoutStatusRequest",
            outputMessage:"ReviseCheckoutStatusResponse",
            name:"ReviseCheckoutStatus",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ReviseItemRequest",
            outputMessage:"ReviseItemResponse",
            name:"ReviseItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ReviseLiveAuctionItemRequest",
            outputMessage:"ReviseLiveAuctionItemResponse",
            name:"ReviseLiveAuctionItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ReviseMyMessagesRequest",
            outputMessage:"ReviseMyMessagesResponse",
            name:"ReviseMyMessages",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ReviseMyMessagesFoldersRequest",
            outputMessage:"ReviseMyMessagesFoldersResponse",
            name:"ReviseMyMessagesFolders",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SellerReverseDisputeRequest",
            outputMessage:"SellerReverseDisputeResponse",
            name:"SellerReverseDispute",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SendInvoiceRequest",
            outputMessage:"SendInvoiceResponse",
            name:"SendInvoice",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetCartRequest",
            outputMessage:"SetCartResponse",
            name:"SetCart",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetMessagePreferencesRequest",
            outputMessage:"SetMessagePreferencesResponse",
            name:"SetMessagePreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetNotificationPreferencesRequest",
            outputMessage:"SetNotificationPreferencesResponse",
            name:"SetNotificationPreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetPictureManagerDetailsRequest",
            outputMessage:"SetPictureManagerDetailsResponse",
            name:"SetPictureManagerDetails",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetPromotionRulesRequest",
            outputMessage:"SetPromotionRulesResponse",
            name:"SetPromotionRules",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetPromotionalSaleRequest",
            outputMessage:"SetPromotionalSaleResponse",
            name:"SetPromotionalSale",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetPromotionalSaleListingsRequest",
            outputMessage:"SetPromotionalSaleListingsResponse",
            name:"SetPromotionalSaleListings",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetReturnURLRequest",
            outputMessage:"SetReturnURLResponse",
            name:"SetReturnURL",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetShippingDiscountProfilesRequest",
            outputMessage:"SetShippingDiscountProfilesResponse",
            name:"SetShippingDiscountProfiles",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetStoreRequest",
            outputMessage:"SetStoreResponse",
            name:"SetStore",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetStoreCategoriesRequest",
            outputMessage:"SetStoreCategoriesResponse",
            name:"SetStoreCategories",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetStoreCustomPageRequest",
            outputMessage:"SetStoreCustomPageResponse",
            name:"SetStoreCustomPage",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetStorePreferencesRequest",
            outputMessage:"SetStorePreferencesResponse",
            name:"SetStorePreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetTaxTableRequest",
            outputMessage:"SetTaxTableResponse",
            name:"SetTaxTable",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetUserNotesRequest",
            outputMessage:"SetUserNotesResponse",
            name:"SetUserNotes",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"SetUserPreferencesRequest",
            outputMessage:"SetUserPreferencesResponse",
            name:"SetUserPreferences",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ValidateChallengeInputRequest",
            outputMessage:"ValidateChallengeInputResponse",
            name:"ValidateChallengeInput",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"ValidateTestUserRegistrationRequest",
            outputMessage:"ValidateTestUserRegistrationResponse",
            name:"ValidateTestUserRegistration",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"VeROReportItemsRequest",
            outputMessage:"VeROReportItemsResponse",
            name:"VeROReportItems",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"VerifyAddItemRequest",
            outputMessage:"VerifyAddItemResponse",
            name:"VerifyAddItem",
            soapAction:""
        },
        {
            inputEncoding:"literal",
            outputEncoding:"literal",
            inputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            outputHeaders:[
                {encoding:"literal", part:"RequesterCredentials", message:"RequesterCredentials"}
            ],
            inputMessage:"VerifyAddSecondChanceItemRequest",
            outputMessage:"VerifyAddSecondChanceItemResponse",
            name:"VerifyAddSecondChanceItem",
            soapAction:""
        }
    ],
    messages:[
        isc.WSDLMessage.create({
            fields:{
                RequesterCredentials:{name:"RequesterCredentials", type:"RequesterCredentials", xmlRequired:true}
            },
            ID:"message:RequesterCredentials"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddDisputeResponse:{name:"AddDisputeResponse", type:"AddDisputeResponse", xmlRequired:true}
            },
            ID:"message:AddDisputeResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddDisputeRequest:{name:"AddDisputeRequest", type:"AddDisputeRequest", xmlRequired:true}
            },
            ID:"message:AddDisputeRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddDisputeResponseResponse:{name:"AddDisputeResponseResponse", type:"AddDisputeResponseResponse", 
                                            xmlRequired:true}
            },
            ID:"message:AddDisputeResponseResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddDisputeResponseRequest:{name:"AddDisputeResponseRequest", type:"AddDisputeResponseRequest", 
                                           xmlRequired:true}
            },
            ID:"message:AddDisputeResponseRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddItemResponse:{name:"AddItemResponse", type:"AddItemResponse", xmlRequired:true}
            },
            ID:"message:AddItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddItemRequest:{name:"AddItemRequest", type:"AddItemRequest", xmlRequired:true}
            },
            ID:"message:AddItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddLiveAuctionItemResponse:{name:"AddLiveAuctionItemResponse", type:"AddLiveAuctionItemResponse", 
                                            xmlRequired:true}
            },
            ID:"message:AddLiveAuctionItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddLiveAuctionItemRequest:{name:"AddLiveAuctionItemRequest", type:"AddLiveAuctionItemRequest", 
                                           xmlRequired:true}
            },
            ID:"message:AddLiveAuctionItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessageAAQToPartnerResponse:{name:"AddMemberMessageAAQToPartnerResponse", 
                                                      type:"AddMemberMessageAAQToPartnerResponse",xmlRequired:true}
            },
            ID:"message:AddMemberMessageAAQToPartnerResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessageAAQToPartnerRequest:{name:"AddMemberMessageAAQToPartnerRequest", 
                                                     type:"AddMemberMessageAAQToPartnerRequest",xmlRequired:true}
            },
            ID:"message:AddMemberMessageAAQToPartnerRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessageRTQResponse:{name:"AddMemberMessageRTQResponse", type:"AddMemberMessageRTQResponse", 
                                             xmlRequired:true}
            },
            ID:"message:AddMemberMessageRTQResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessageRTQRequest:{name:"AddMemberMessageRTQRequest", type:"AddMemberMessageRTQRequest", 
                                            xmlRequired:true}
            },
            ID:"message:AddMemberMessageRTQRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessagesAAQToBidderResponse:{name:"AddMemberMessagesAAQToBidderResponse", 
                                                      type:"AddMemberMessagesAAQToBidderResponse",xmlRequired:true}
            },
            ID:"message:AddMemberMessagesAAQToBidderResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddMemberMessagesAAQToBidderRequest:{name:"AddMemberMessagesAAQToBidderRequest", 
                                                     type:"AddMemberMessagesAAQToBidderRequest",xmlRequired:true}
            },
            ID:"message:AddMemberMessagesAAQToBidderRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddOrderResponse:{name:"AddOrderResponse", type:"AddOrderResponse", xmlRequired:true}
            },
            ID:"message:AddOrderResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddOrderRequest:{name:"AddOrderRequest", type:"AddOrderRequest", xmlRequired:true}
            },
            ID:"message:AddOrderRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddSecondChanceItemResponse:{name:"AddSecondChanceItemResponse", type:"AddSecondChanceItemResponse", 
                                             xmlRequired:true}
            },
            ID:"message:AddSecondChanceItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddSecondChanceItemRequest:{name:"AddSecondChanceItemRequest", type:"AddSecondChanceItemRequest", 
                                            xmlRequired:true}
            },
            ID:"message:AddSecondChanceItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddToItemDescriptionResponse:{name:"AddToItemDescriptionResponse", type:"AddToItemDescriptionResponse", 
                                              xmlRequired:true}
            },
            ID:"message:AddToItemDescriptionResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddToItemDescriptionRequest:{name:"AddToItemDescriptionRequest", type:"AddToItemDescriptionRequest", 
                                             xmlRequired:true}
            },
            ID:"message:AddToItemDescriptionRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddToWatchListResponse:{name:"AddToWatchListResponse", type:"AddToWatchListResponse", xmlRequired:true}
            },
            ID:"message:AddToWatchListResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddToWatchListRequest:{name:"AddToWatchListRequest", type:"AddToWatchListRequest", xmlRequired:true}
            },
            ID:"message:AddToWatchListRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddTransactionConfirmationItemResponse:{name:"AddTransactionConfirmationItemResponse", 
                                                        type:"AddTransactionConfirmationItemResponse",xmlRequired:true}
            },
            ID:"message:AddTransactionConfirmationItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                AddTransactionConfirmationItemRequest:{name:"AddTransactionConfirmationItemRequest", 
                                                       type:"AddTransactionConfirmationItemRequest",xmlRequired:true}
            },
            ID:"message:AddTransactionConfirmationItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ApproveLiveAuctionBiddersResponse:{name:"ApproveLiveAuctionBiddersResponse", 
                                                   type:"ApproveLiveAuctionBiddersResponse",xmlRequired:true}
            },
            ID:"message:ApproveLiveAuctionBiddersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ApproveLiveAuctionBiddersRequest:{name:"ApproveLiveAuctionBiddersRequest", type:"ApproveLiveAuctionBiddersRequest", 
                                                  xmlRequired:true}
            },
            ID:"message:ApproveLiveAuctionBiddersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                CompleteSaleResponse:{name:"CompleteSaleResponse", type:"CompleteSaleResponse", xmlRequired:true}
            },
            ID:"message:CompleteSaleResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                CompleteSaleRequest:{name:"CompleteSaleRequest", type:"CompleteSaleRequest", xmlRequired:true}
            },
            ID:"message:CompleteSaleRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                DeleteMyMessagesResponse:{name:"DeleteMyMessagesResponse", type:"DeleteMyMessagesResponse", 
                                          xmlRequired:true}
            },
            ID:"message:DeleteMyMessagesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                DeleteMyMessagesRequest:{name:"DeleteMyMessagesRequest", type:"DeleteMyMessagesRequest", 
                                         xmlRequired:true}
            },
            ID:"message:DeleteMyMessagesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                EndItemResponse:{name:"EndItemResponse", type:"EndItemResponse", xmlRequired:true}
            },
            ID:"message:EndItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                EndItemRequest:{name:"EndItemRequest", type:"EndItemRequest", xmlRequired:true}
            },
            ID:"message:EndItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                FetchTokenResponse:{name:"FetchTokenResponse", type:"FetchTokenResponse", xmlRequired:true}
            },
            ID:"message:FetchTokenResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                FetchTokenRequest:{name:"FetchTokenRequest", type:"FetchTokenRequest", xmlRequired:true}
            },
            ID:"message:FetchTokenRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAccountResponse:{name:"GetAccountResponse", type:"GetAccountResponse", xmlRequired:true}
            },
            ID:"message:GetAccountResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAccountRequest:{name:"GetAccountRequest", type:"GetAccountRequest", xmlRequired:true}
            },
            ID:"message:GetAccountRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAdFormatLeadsResponse:{name:"GetAdFormatLeadsResponse", type:"GetAdFormatLeadsResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetAdFormatLeadsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAdFormatLeadsRequest:{name:"GetAdFormatLeadsRequest", type:"GetAdFormatLeadsRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetAdFormatLeadsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAllBiddersResponse:{name:"GetAllBiddersResponse", type:"GetAllBiddersResponse", xmlRequired:true}
            },
            ID:"message:GetAllBiddersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAllBiddersRequest:{name:"GetAllBiddersRequest", type:"GetAllBiddersRequest", xmlRequired:true}
            },
            ID:"message:GetAllBiddersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetApiAccessRulesResponse:{name:"GetApiAccessRulesResponse", type:"GetApiAccessRulesResponse", 
                                           xmlRequired:true}
            },
            ID:"message:GetApiAccessRulesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetApiAccessRulesRequest:{name:"GetApiAccessRulesRequest", type:"GetApiAccessRulesRequest", 
                                          xmlRequired:true}
            },
            ID:"message:GetApiAccessRulesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAttributesCSResponse:{name:"GetAttributesCSResponse", type:"GetAttributesCSResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetAttributesCSResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAttributesCSRequest:{name:"GetAttributesCSRequest", type:"GetAttributesCSRequest", xmlRequired:true}
            },
            ID:"message:GetAttributesCSRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAttributesXSLResponse:{name:"GetAttributesXSLResponse", type:"GetAttributesXSLResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetAttributesXSLResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetAttributesXSLRequest:{name:"GetAttributesXSLRequest", type:"GetAttributesXSLRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetAttributesXSLRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetBestOffersResponse:{name:"GetBestOffersResponse", type:"GetBestOffersResponse", xmlRequired:true}
            },
            ID:"message:GetBestOffersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetBestOffersRequest:{name:"GetBestOffersRequest", type:"GetBestOffersRequest", xmlRequired:true}
            },
            ID:"message:GetBestOffersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetBidderListResponse:{name:"GetBidderListResponse", type:"GetBidderListResponse", xmlRequired:true}
            },
            ID:"message:GetBidderListResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetBidderListRequest:{name:"GetBidderListRequest", type:"GetBidderListRequest", xmlRequired:true}
            },
            ID:"message:GetBidderListRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCartResponse:{name:"GetCartResponse", type:"GetCartResponse", xmlRequired:true}
            },
            ID:"message:GetCartResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCartRequest:{name:"GetCartRequest", type:"GetCartRequest", xmlRequired:true}
            },
            ID:"message:GetCartRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoriesResponse:{name:"GetCategoriesResponse", type:"GetCategoriesResponse", xmlRequired:true}
            },
            ID:"message:GetCategoriesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoriesRequest:{name:"GetCategoriesRequest", type:"GetCategoriesRequest", xmlRequired:true}
            },
            ID:"message:GetCategoriesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategory2CSResponse:{name:"GetCategory2CSResponse", type:"GetCategory2CSResponse", xmlRequired:true}
            },
            ID:"message:GetCategory2CSResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategory2CSRequest:{name:"GetCategory2CSRequest", type:"GetCategory2CSRequest", xmlRequired:true}
            },
            ID:"message:GetCategory2CSRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategory2FinanceOfferResponse:{name:"GetCategory2FinanceOfferResponse", type:"GetCategory2FinanceOfferResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:GetCategory2FinanceOfferResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategory2FinanceOfferRequest:{name:"GetCategory2FinanceOfferRequest", type:"GetCategory2FinanceOfferRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:GetCategory2FinanceOfferRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryFeaturesResponse:{name:"GetCategoryFeaturesResponse", type:"GetCategoryFeaturesResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetCategoryFeaturesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryFeaturesRequest:{name:"GetCategoryFeaturesRequest", type:"GetCategoryFeaturesRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetCategoryFeaturesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryListingsResponse:{name:"GetCategoryListingsResponse", type:"GetCategoryListingsResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetCategoryListingsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryListingsRequest:{name:"GetCategoryListingsRequest", type:"GetCategoryListingsRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetCategoryListingsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryMappingsResponse:{name:"GetCategoryMappingsResponse", type:"GetCategoryMappingsResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetCategoryMappingsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCategoryMappingsRequest:{name:"GetCategoryMappingsRequest", type:"GetCategoryMappingsRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetCategoryMappingsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetChallengeTokenResponse:{name:"GetChallengeTokenResponse", type:"GetChallengeTokenResponse", 
                                           xmlRequired:true}
            },
            ID:"message:GetChallengeTokenResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetChallengeTokenRequest:{name:"GetChallengeTokenRequest", type:"GetChallengeTokenRequest", 
                                          xmlRequired:true}
            },
            ID:"message:GetChallengeTokenRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCharitiesResponse:{name:"GetCharitiesResponse", type:"GetCharitiesResponse", xmlRequired:true}
            },
            ID:"message:GetCharitiesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCharitiesRequest:{name:"GetCharitiesRequest", type:"GetCharitiesRequest", xmlRequired:true}
            },
            ID:"message:GetCharitiesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetContextualKeywordsResponse:{name:"GetContextualKeywordsResponse", type:"GetContextualKeywordsResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetContextualKeywordsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetContextualKeywordsRequest:{name:"GetContextualKeywordsRequest", type:"GetContextualKeywordsRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetContextualKeywordsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCrossPromotionsResponse:{name:"GetCrossPromotionsResponse", type:"GetCrossPromotionsResponse", 
                                            xmlRequired:true}
            },
            ID:"message:GetCrossPromotionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetCrossPromotionsRequest:{name:"GetCrossPromotionsRequest", type:"GetCrossPromotionsRequest", 
                                           xmlRequired:true}
            },
            ID:"message:GetCrossPromotionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetDescriptionTemplatesResponse:{name:"GetDescriptionTemplatesResponse", type:"GetDescriptionTemplatesResponse", 
                                                 xmlRequired:true}
            },
            ID:"message:GetDescriptionTemplatesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetDescriptionTemplatesRequest:{name:"GetDescriptionTemplatesRequest", type:"GetDescriptionTemplatesRequest", 
                                                xmlRequired:true}
            },
            ID:"message:GetDescriptionTemplatesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetDisputeResponse:{name:"GetDisputeResponse", type:"GetDisputeResponse", xmlRequired:true}
            },
            ID:"message:GetDisputeResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetDisputeRequest:{name:"GetDisputeRequest", type:"GetDisputeRequest", xmlRequired:true}
            },
            ID:"message:GetDisputeRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetFeedbackResponse:{name:"GetFeedbackResponse", type:"GetFeedbackResponse", xmlRequired:true}
            },
            ID:"message:GetFeedbackResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetFeedbackRequest:{name:"GetFeedbackRequest", type:"GetFeedbackRequest", xmlRequired:true}
            },
            ID:"message:GetFeedbackRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetFinanceOffersResponse:{name:"GetFinanceOffersResponse", type:"GetFinanceOffersResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetFinanceOffersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetFinanceOffersRequest:{name:"GetFinanceOffersRequest", type:"GetFinanceOffersRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetFinanceOffersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetHighBiddersResponse:{name:"GetHighBiddersResponse", type:"GetHighBiddersResponse", xmlRequired:true}
            },
            ID:"message:GetHighBiddersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetHighBiddersRequest:{name:"GetHighBiddersRequest", type:"GetHighBiddersRequest", xmlRequired:true}
            },
            ID:"message:GetHighBiddersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemResponse:{name:"GetItemResponse", type:"GetItemResponse", xmlRequired:true}
            },
            ID:"message:GetItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemRequest:{name:"GetItemRequest", type:"GetItemRequest", xmlRequired:true}
            },
            ID:"message:GetItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemRecommendationsResponse:{name:"GetItemRecommendationsResponse", type:"GetItemRecommendationsResponse", 
                                                xmlRequired:true}
            },
            ID:"message:GetItemRecommendationsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemRecommendationsRequest:{name:"GetItemRecommendationsRequest", type:"GetItemRecommendationsRequest", 
                                               xmlRequired:true}
            },
            ID:"message:GetItemRecommendationsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemShippingResponse:{name:"GetItemShippingResponse", type:"GetItemShippingResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetItemShippingResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemShippingRequest:{name:"GetItemShippingRequest", type:"GetItemShippingRequest", xmlRequired:true}
            },
            ID:"message:GetItemShippingRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemTransactionsResponse:{name:"GetItemTransactionsResponse", type:"GetItemTransactionsResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetItemTransactionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemTransactionsRequest:{name:"GetItemTransactionsRequest", type:"GetItemTransactionsRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetItemTransactionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemsAwaitingFeedbackResponse:{name:"GetItemsAwaitingFeedbackResponse", type:"GetItemsAwaitingFeedbackResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:GetItemsAwaitingFeedbackResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetItemsAwaitingFeedbackRequest:{name:"GetItemsAwaitingFeedbackRequest", type:"GetItemsAwaitingFeedbackRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:GetItemsAwaitingFeedbackRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetLiveAuctionBiddersResponse:{name:"GetLiveAuctionBiddersResponse", type:"GetLiveAuctionBiddersResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetLiveAuctionBiddersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetLiveAuctionBiddersRequest:{name:"GetLiveAuctionBiddersRequest", type:"GetLiveAuctionBiddersRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetLiveAuctionBiddersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetLiveAuctionCatalogDetailsResponse:{name:"GetLiveAuctionCatalogDetailsResponse", 
                                                      type:"GetLiveAuctionCatalogDetailsResponse",xmlRequired:true}
            },
            ID:"message:GetLiveAuctionCatalogDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetLiveAuctionCatalogDetailsRequest:{name:"GetLiveAuctionCatalogDetailsRequest", 
                                                     type:"GetLiveAuctionCatalogDetailsRequest",xmlRequired:true}
            },
            ID:"message:GetLiveAuctionCatalogDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMemberMessagesResponse:{name:"GetMemberMessagesResponse", type:"GetMemberMessagesResponse", 
                                           xmlRequired:true}
            },
            ID:"message:GetMemberMessagesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMemberMessagesRequest:{name:"GetMemberMessagesRequest", type:"GetMemberMessagesRequest", 
                                          xmlRequired:true}
            },
            ID:"message:GetMemberMessagesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMessagePreferencesResponse:{name:"GetMessagePreferencesResponse", type:"GetMessagePreferencesResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetMessagePreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMessagePreferencesRequest:{name:"GetMessagePreferencesRequest", type:"GetMessagePreferencesRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetMessagePreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyMessagesResponse:{name:"GetMyMessagesResponse", type:"GetMyMessagesResponse", xmlRequired:true}
            },
            ID:"message:GetMyMessagesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyMessagesRequest:{name:"GetMyMessagesRequest", type:"GetMyMessagesRequest", xmlRequired:true}
            },
            ID:"message:GetMyMessagesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBayBuyingResponse:{name:"GetMyeBayBuyingResponse", type:"GetMyeBayBuyingResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetMyeBayBuyingResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBayBuyingRequest:{name:"GetMyeBayBuyingRequest", type:"GetMyeBayBuyingRequest", xmlRequired:true}
            },
            ID:"message:GetMyeBayBuyingRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBayRemindersResponse:{name:"GetMyeBayRemindersResponse", type:"GetMyeBayRemindersResponse", 
                                            xmlRequired:true}
            },
            ID:"message:GetMyeBayRemindersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBayRemindersRequest:{name:"GetMyeBayRemindersRequest", type:"GetMyeBayRemindersRequest", 
                                           xmlRequired:true}
            },
            ID:"message:GetMyeBayRemindersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBaySellingResponse:{name:"GetMyeBaySellingResponse", type:"GetMyeBaySellingResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetMyeBaySellingResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetMyeBaySellingRequest:{name:"GetMyeBaySellingRequest", type:"GetMyeBaySellingRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetMyeBaySellingRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetNotificationPreferencesResponse:{name:"GetNotificationPreferencesResponse", 
                                                    type:"GetNotificationPreferencesResponse",xmlRequired:true}
            },
            ID:"message:GetNotificationPreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetNotificationPreferencesRequest:{name:"GetNotificationPreferencesRequest", 
                                                   type:"GetNotificationPreferencesRequest",xmlRequired:true}
            },
            ID:"message:GetNotificationPreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetNotificationsUsageResponse:{name:"GetNotificationsUsageResponse", type:"GetNotificationsUsageResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetNotificationsUsageResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetNotificationsUsageRequest:{name:"GetNotificationsUsageRequest", type:"GetNotificationsUsageRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetNotificationsUsageRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetOrderTransactionsResponse:{name:"GetOrderTransactionsResponse", type:"GetOrderTransactionsResponse", 
                                              xmlRequired:true}
            },
            ID:"message:GetOrderTransactionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetOrderTransactionsRequest:{name:"GetOrderTransactionsRequest", type:"GetOrderTransactionsRequest", 
                                             xmlRequired:true}
            },
            ID:"message:GetOrderTransactionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetOrdersResponse:{name:"GetOrdersResponse", type:"GetOrdersResponse", xmlRequired:true}
            },
            ID:"message:GetOrdersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetOrdersRequest:{name:"GetOrdersRequest", type:"GetOrdersRequest", xmlRequired:true}
            },
            ID:"message:GetOrdersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPictureManagerDetailsResponse:{name:"GetPictureManagerDetailsResponse", type:"GetPictureManagerDetailsResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:GetPictureManagerDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPictureManagerDetailsRequest:{name:"GetPictureManagerDetailsRequest", type:"GetPictureManagerDetailsRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:GetPictureManagerDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPictureManagerOptionsResponse:{name:"GetPictureManagerOptionsResponse", type:"GetPictureManagerOptionsResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:GetPictureManagerOptionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPictureManagerOptionsRequest:{name:"GetPictureManagerOptionsRequest", type:"GetPictureManagerOptionsRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:GetPictureManagerOptionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPopularKeywordsResponse:{name:"GetPopularKeywordsResponse", type:"GetPopularKeywordsResponse", 
                                            xmlRequired:true}
            },
            ID:"message:GetPopularKeywordsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPopularKeywordsRequest:{name:"GetPopularKeywordsRequest", type:"GetPopularKeywordsRequest", 
                                           xmlRequired:true}
            },
            ID:"message:GetPopularKeywordsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFamilyMembersResponse:{name:"GetProductFamilyMembersResponse", type:"GetProductFamilyMembersResponse", 
                                                 xmlRequired:true}
            },
            ID:"message:GetProductFamilyMembersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFamilyMembersRequest:{name:"GetProductFamilyMembersRequest", type:"GetProductFamilyMembersRequest", 
                                                xmlRequired:true}
            },
            ID:"message:GetProductFamilyMembersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFinderResponse:{name:"GetProductFinderResponse", type:"GetProductFinderResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetProductFinderResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFinderRequest:{name:"GetProductFinderRequest", type:"GetProductFinderRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetProductFinderRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFinderXSLResponse:{name:"GetProductFinderXSLResponse", type:"GetProductFinderXSLResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetProductFinderXSLResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductFinderXSLRequest:{name:"GetProductFinderXSLRequest", type:"GetProductFinderXSLRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetProductFinderXSLRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSearchPageResponse:{name:"GetProductSearchPageResponse", type:"GetProductSearchPageResponse", 
                                              xmlRequired:true}
            },
            ID:"message:GetProductSearchPageResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSearchPageRequest:{name:"GetProductSearchPageRequest", type:"GetProductSearchPageRequest", 
                                             xmlRequired:true}
            },
            ID:"message:GetProductSearchPageRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSearchResultsResponse:{name:"GetProductSearchResultsResponse", type:"GetProductSearchResultsResponse", 
                                                 xmlRequired:true}
            },
            ID:"message:GetProductSearchResultsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSearchResultsRequest:{name:"GetProductSearchResultsRequest", type:"GetProductSearchResultsRequest", 
                                                xmlRequired:true}
            },
            ID:"message:GetProductSearchResultsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSellingPagesResponse:{name:"GetProductSellingPagesResponse", type:"GetProductSellingPagesResponse", 
                                                xmlRequired:true}
            },
            ID:"message:GetProductSellingPagesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductSellingPagesRequest:{name:"GetProductSellingPagesRequest", type:"GetProductSellingPagesRequest", 
                                               xmlRequired:true}
            },
            ID:"message:GetProductSellingPagesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductsResponse:{name:"GetProductsResponse", type:"GetProductsResponse", xmlRequired:true}
            },
            ID:"message:GetProductsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetProductsRequest:{name:"GetProductsRequest", type:"GetProductsRequest", xmlRequired:true}
            },
            ID:"message:GetProductsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPromotionRulesResponse:{name:"GetPromotionRulesResponse", type:"GetPromotionRulesResponse", 
                                           xmlRequired:true}
            },
            ID:"message:GetPromotionRulesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPromotionRulesRequest:{name:"GetPromotionRulesRequest", type:"GetPromotionRulesRequest", 
                                          xmlRequired:true}
            },
            ID:"message:GetPromotionRulesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPromotionalSaleDetailsResponse:{name:"GetPromotionalSaleDetailsResponse", 
                                                   type:"GetPromotionalSaleDetailsResponse",xmlRequired:true}
            },
            ID:"message:GetPromotionalSaleDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetPromotionalSaleDetailsRequest:{name:"GetPromotionalSaleDetailsRequest", type:"GetPromotionalSaleDetailsRequest", 
                                                  xmlRequired:true}
            },
            ID:"message:GetPromotionalSaleDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetReturnURLResponse:{name:"GetReturnURLResponse", type:"GetReturnURLResponse", xmlRequired:true}
            },
            ID:"message:GetReturnURLResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetReturnURLRequest:{name:"GetReturnURLRequest", type:"GetReturnURLRequest", xmlRequired:true}
            },
            ID:"message:GetReturnURLRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetRuNameResponse:{name:"GetRuNameResponse", type:"GetRuNameResponse", xmlRequired:true}
            },
            ID:"message:GetRuNameResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetRuNameRequest:{name:"GetRuNameRequest", type:"GetRuNameRequest", xmlRequired:true}
            },
            ID:"message:GetRuNameRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSearchResultsResponse:{name:"GetSearchResultsResponse", type:"GetSearchResultsResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetSearchResultsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSearchResultsRequest:{name:"GetSearchResultsRequest", type:"GetSearchResultsRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetSearchResultsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSearchResultsExpressResponse:{name:"GetSearchResultsExpressResponse", type:"GetSearchResultsExpressResponse", 
                                                 xmlRequired:true}
            },
            ID:"message:GetSearchResultsExpressResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSearchResultsExpressRequest:{name:"GetSearchResultsExpressRequest", type:"GetSearchResultsExpressRequest", 
                                                xmlRequired:true}
            },
            ID:"message:GetSearchResultsExpressRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerEventsResponse:{name:"GetSellerEventsResponse", type:"GetSellerEventsResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetSellerEventsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerEventsRequest:{name:"GetSellerEventsRequest", type:"GetSellerEventsRequest", xmlRequired:true}
            },
            ID:"message:GetSellerEventsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerListResponse:{name:"GetSellerListResponse", type:"GetSellerListResponse", xmlRequired:true}
            },
            ID:"message:GetSellerListResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerListRequest:{name:"GetSellerListRequest", type:"GetSellerListRequest", xmlRequired:true}
            },
            ID:"message:GetSellerListRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerPaymentsResponse:{name:"GetSellerPaymentsResponse", type:"GetSellerPaymentsResponse", 
                                           xmlRequired:true}
            },
            ID:"message:GetSellerPaymentsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerPaymentsRequest:{name:"GetSellerPaymentsRequest", type:"GetSellerPaymentsRequest", 
                                          xmlRequired:true}
            },
            ID:"message:GetSellerPaymentsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerTransactionsResponse:{name:"GetSellerTransactionsResponse", type:"GetSellerTransactionsResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetSellerTransactionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSellerTransactionsRequest:{name:"GetSellerTransactionsRequest", type:"GetSellerTransactionsRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetSellerTransactionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetShippingDiscountProfilesResponse:{name:"GetShippingDiscountProfilesResponse", 
                                                     type:"GetShippingDiscountProfilesResponse",xmlRequired:true}
            },
            ID:"message:GetShippingDiscountProfilesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetShippingDiscountProfilesRequest:{name:"GetShippingDiscountProfilesRequest", 
                                                    type:"GetShippingDiscountProfilesRequest",xmlRequired:true}
            },
            ID:"message:GetShippingDiscountProfilesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreResponse:{name:"GetStoreResponse", type:"GetStoreResponse", xmlRequired:true}
            },
            ID:"message:GetStoreResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreRequest:{name:"GetStoreRequest", type:"GetStoreRequest", xmlRequired:true}
            },
            ID:"message:GetStoreRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreCategoryUpdateStatusResponse:{name:"GetStoreCategoryUpdateStatusResponse", 
                                                      type:"GetStoreCategoryUpdateStatusResponse",xmlRequired:true}
            },
            ID:"message:GetStoreCategoryUpdateStatusResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreCategoryUpdateStatusRequest:{name:"GetStoreCategoryUpdateStatusRequest", 
                                                     type:"GetStoreCategoryUpdateStatusRequest",xmlRequired:true}
            },
            ID:"message:GetStoreCategoryUpdateStatusRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreCustomPageResponse:{name:"GetStoreCustomPageResponse", type:"GetStoreCustomPageResponse", 
                                            xmlRequired:true}
            },
            ID:"message:GetStoreCustomPageResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreCustomPageRequest:{name:"GetStoreCustomPageRequest", type:"GetStoreCustomPageRequest", 
                                           xmlRequired:true}
            },
            ID:"message:GetStoreCustomPageRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreOptionsResponse:{name:"GetStoreOptionsResponse", type:"GetStoreOptionsResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetStoreOptionsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStoreOptionsRequest:{name:"GetStoreOptionsRequest", type:"GetStoreOptionsRequest", xmlRequired:true}
            },
            ID:"message:GetStoreOptionsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStorePreferencesResponse:{name:"GetStorePreferencesResponse", type:"GetStorePreferencesResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetStorePreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetStorePreferencesRequest:{name:"GetStorePreferencesRequest", type:"GetStorePreferencesRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetStorePreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSuggestedCategoriesResponse:{name:"GetSuggestedCategoriesResponse", type:"GetSuggestedCategoriesResponse", 
                                                xmlRequired:true}
            },
            ID:"message:GetSuggestedCategoriesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetSuggestedCategoriesRequest:{name:"GetSuggestedCategoriesRequest", type:"GetSuggestedCategoriesRequest", 
                                               xmlRequired:true}
            },
            ID:"message:GetSuggestedCategoriesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetTaxTableResponse:{name:"GetTaxTableResponse", type:"GetTaxTableResponse", xmlRequired:true}
            },
            ID:"message:GetTaxTableResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetTaxTableRequest:{name:"GetTaxTableRequest", type:"GetTaxTableRequest", xmlRequired:true}
            },
            ID:"message:GetTaxTableRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserResponse:{name:"GetUserResponse", type:"GetUserResponse", xmlRequired:true}
            },
            ID:"message:GetUserResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserRequest:{name:"GetUserRequest", type:"GetUserRequest", xmlRequired:true}
            },
            ID:"message:GetUserRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserContactDetailsResponse:{name:"GetUserContactDetailsResponse", type:"GetUserContactDetailsResponse", 
                                               xmlRequired:true}
            },
            ID:"message:GetUserContactDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserContactDetailsRequest:{name:"GetUserContactDetailsRequest", type:"GetUserContactDetailsRequest", 
                                              xmlRequired:true}
            },
            ID:"message:GetUserContactDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserDisputesResponse:{name:"GetUserDisputesResponse", type:"GetUserDisputesResponse", 
                                         xmlRequired:true}
            },
            ID:"message:GetUserDisputesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserDisputesRequest:{name:"GetUserDisputesRequest", type:"GetUserDisputesRequest", xmlRequired:true}
            },
            ID:"message:GetUserDisputesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserPreferencesResponse:{name:"GetUserPreferencesResponse", type:"GetUserPreferencesResponse", 
                                            xmlRequired:true}
            },
            ID:"message:GetUserPreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetUserPreferencesRequest:{name:"GetUserPreferencesRequest", type:"GetUserPreferencesRequest", 
                                           xmlRequired:true}
            },
            ID:"message:GetUserPreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetVeROReasonCodeDetailsResponse:{name:"GetVeROReasonCodeDetailsResponse", type:"GetVeROReasonCodeDetailsResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:GetVeROReasonCodeDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetVeROReasonCodeDetailsRequest:{name:"GetVeROReasonCodeDetailsRequest", type:"GetVeROReasonCodeDetailsRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:GetVeROReasonCodeDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetVeROReportStatusResponse:{name:"GetVeROReportStatusResponse", type:"GetVeROReportStatusResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GetVeROReportStatusResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetVeROReportStatusRequest:{name:"GetVeROReportStatusRequest", type:"GetVeROReportStatusRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GetVeROReportStatusRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetWantItNowPostResponse:{name:"GetWantItNowPostResponse", type:"GetWantItNowPostResponse", 
                                          xmlRequired:true}
            },
            ID:"message:GetWantItNowPostResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetWantItNowPostRequest:{name:"GetWantItNowPostRequest", type:"GetWantItNowPostRequest", 
                                         xmlRequired:true}
            },
            ID:"message:GetWantItNowPostRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetWantItNowSearchResultsResponse:{name:"GetWantItNowSearchResultsResponse", 
                                                   type:"GetWantItNowSearchResultsResponse",xmlRequired:true}
            },
            ID:"message:GetWantItNowSearchResultsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GetWantItNowSearchResultsRequest:{name:"GetWantItNowSearchResultsRequest", type:"GetWantItNowSearchResultsRequest", 
                                                  xmlRequired:true}
            },
            ID:"message:GetWantItNowSearchResultsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GeteBayDetailsResponse:{name:"GeteBayDetailsResponse", type:"GeteBayDetailsResponse", xmlRequired:true}
            },
            ID:"message:GeteBayDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GeteBayDetailsRequest:{name:"GeteBayDetailsRequest", type:"GeteBayDetailsRequest", xmlRequired:true}
            },
            ID:"message:GeteBayDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GeteBayOfficialTimeResponse:{name:"GeteBayOfficialTimeResponse", type:"GeteBayOfficialTimeResponse", 
                                             xmlRequired:true}
            },
            ID:"message:GeteBayOfficialTimeResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                GeteBayOfficialTimeRequest:{name:"GeteBayOfficialTimeRequest", type:"GeteBayOfficialTimeRequest", 
                                            xmlRequired:true}
            },
            ID:"message:GeteBayOfficialTimeRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                IssueRefundResponse:{name:"IssueRefundResponse", type:"IssueRefundResponse", xmlRequired:true}
            },
            ID:"message:IssueRefundResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                IssueRefundRequest:{name:"IssueRefundRequest", type:"IssueRefundRequest", xmlRequired:true}
            },
            ID:"message:IssueRefundRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                LeaveFeedbackResponse:{name:"LeaveFeedbackResponse", type:"LeaveFeedbackResponse", xmlRequired:true}
            },
            ID:"message:LeaveFeedbackResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                LeaveFeedbackRequest:{name:"LeaveFeedbackRequest", type:"LeaveFeedbackRequest", xmlRequired:true}
            },
            ID:"message:LeaveFeedbackRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                PlaceOfferResponse:{name:"PlaceOfferResponse", type:"PlaceOfferResponse", xmlRequired:true}
            },
            ID:"message:PlaceOfferResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                PlaceOfferRequest:{name:"PlaceOfferRequest", type:"PlaceOfferRequest", xmlRequired:true}
            },
            ID:"message:PlaceOfferRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RelistItemResponse:{name:"RelistItemResponse", type:"RelistItemResponse", xmlRequired:true}
            },
            ID:"message:RelistItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RelistItemRequest:{name:"RelistItemRequest", type:"RelistItemRequest", xmlRequired:true}
            },
            ID:"message:RelistItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RemoveFromWatchListResponse:{name:"RemoveFromWatchListResponse", type:"RemoveFromWatchListResponse", 
                                             xmlRequired:true}
            },
            ID:"message:RemoveFromWatchListResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RemoveFromWatchListRequest:{name:"RemoveFromWatchListRequest", type:"RemoveFromWatchListRequest", 
                                            xmlRequired:true}
            },
            ID:"message:RemoveFromWatchListRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToBestOfferResponse:{name:"RespondToBestOfferResponse", type:"RespondToBestOfferResponse", 
                                            xmlRequired:true}
            },
            ID:"message:RespondToBestOfferResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToBestOfferRequest:{name:"RespondToBestOfferRequest", type:"RespondToBestOfferRequest", 
                                           xmlRequired:true}
            },
            ID:"message:RespondToBestOfferRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToFeedbackResponse:{name:"RespondToFeedbackResponse", type:"RespondToFeedbackResponse", 
                                           xmlRequired:true}
            },
            ID:"message:RespondToFeedbackResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToFeedbackRequest:{name:"RespondToFeedbackRequest", type:"RespondToFeedbackRequest", 
                                          xmlRequired:true}
            },
            ID:"message:RespondToFeedbackRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToWantItNowPostResponse:{name:"RespondToWantItNowPostResponse", type:"RespondToWantItNowPostResponse", 
                                                xmlRequired:true}
            },
            ID:"message:RespondToWantItNowPostResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                RespondToWantItNowPostRequest:{name:"RespondToWantItNowPostRequest", type:"RespondToWantItNowPostRequest", 
                                               xmlRequired:true}
            },
            ID:"message:RespondToWantItNowPostRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseCheckoutStatusResponse:{name:"ReviseCheckoutStatusResponse", type:"ReviseCheckoutStatusResponse", 
                                              xmlRequired:true}
            },
            ID:"message:ReviseCheckoutStatusResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseCheckoutStatusRequest:{name:"ReviseCheckoutStatusRequest", type:"ReviseCheckoutStatusRequest", 
                                             xmlRequired:true}
            },
            ID:"message:ReviseCheckoutStatusRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseItemResponse:{name:"ReviseItemResponse", type:"ReviseItemResponse", xmlRequired:true}
            },
            ID:"message:ReviseItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseItemRequest:{name:"ReviseItemRequest", type:"ReviseItemRequest", xmlRequired:true}
            },
            ID:"message:ReviseItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseLiveAuctionItemResponse:{name:"ReviseLiveAuctionItemResponse", type:"ReviseLiveAuctionItemResponse", 
                                               xmlRequired:true}
            },
            ID:"message:ReviseLiveAuctionItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseLiveAuctionItemRequest:{name:"ReviseLiveAuctionItemRequest", type:"ReviseLiveAuctionItemRequest", 
                                              xmlRequired:true}
            },
            ID:"message:ReviseLiveAuctionItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseMyMessagesResponse:{name:"ReviseMyMessagesResponse", type:"ReviseMyMessagesResponse", 
                                          xmlRequired:true}
            },
            ID:"message:ReviseMyMessagesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseMyMessagesRequest:{name:"ReviseMyMessagesRequest", type:"ReviseMyMessagesRequest", 
                                         xmlRequired:true}
            },
            ID:"message:ReviseMyMessagesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseMyMessagesFoldersResponse:{name:"ReviseMyMessagesFoldersResponse", type:"ReviseMyMessagesFoldersResponse", 
                                                 xmlRequired:true}
            },
            ID:"message:ReviseMyMessagesFoldersResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ReviseMyMessagesFoldersRequest:{name:"ReviseMyMessagesFoldersRequest", type:"ReviseMyMessagesFoldersRequest", 
                                                xmlRequired:true}
            },
            ID:"message:ReviseMyMessagesFoldersRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SellerReverseDisputeResponse:{name:"SellerReverseDisputeResponse", type:"SellerReverseDisputeResponse", 
                                              xmlRequired:true}
            },
            ID:"message:SellerReverseDisputeResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SellerReverseDisputeRequest:{name:"SellerReverseDisputeRequest", type:"SellerReverseDisputeRequest", 
                                             xmlRequired:true}
            },
            ID:"message:SellerReverseDisputeRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SendInvoiceResponse:{name:"SendInvoiceResponse", type:"SendInvoiceResponse", xmlRequired:true}
            },
            ID:"message:SendInvoiceResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SendInvoiceRequest:{name:"SendInvoiceRequest", type:"SendInvoiceRequest", xmlRequired:true}
            },
            ID:"message:SendInvoiceRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetCartResponse:{name:"SetCartResponse", type:"SetCartResponse", xmlRequired:true}
            },
            ID:"message:SetCartResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetCartRequest:{name:"SetCartRequest", type:"SetCartRequest", xmlRequired:true}
            },
            ID:"message:SetCartRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetMessagePreferencesResponse:{name:"SetMessagePreferencesResponse", type:"SetMessagePreferencesResponse", 
                                               xmlRequired:true}
            },
            ID:"message:SetMessagePreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetMessagePreferencesRequest:{name:"SetMessagePreferencesRequest", type:"SetMessagePreferencesRequest", 
                                              xmlRequired:true}
            },
            ID:"message:SetMessagePreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetNotificationPreferencesResponse:{name:"SetNotificationPreferencesResponse", 
                                                    type:"SetNotificationPreferencesResponse",xmlRequired:true}
            },
            ID:"message:SetNotificationPreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetNotificationPreferencesRequest:{name:"SetNotificationPreferencesRequest", 
                                                   type:"SetNotificationPreferencesRequest",xmlRequired:true}
            },
            ID:"message:SetNotificationPreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPictureManagerDetailsResponse:{name:"SetPictureManagerDetailsResponse", type:"SetPictureManagerDetailsResponse", 
                                                  xmlRequired:true}
            },
            ID:"message:SetPictureManagerDetailsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPictureManagerDetailsRequest:{name:"SetPictureManagerDetailsRequest", type:"SetPictureManagerDetailsRequest", 
                                                 xmlRequired:true}
            },
            ID:"message:SetPictureManagerDetailsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionRulesResponse:{name:"SetPromotionRulesResponse", type:"SetPromotionRulesResponse", 
                                           xmlRequired:true}
            },
            ID:"message:SetPromotionRulesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionRulesRequest:{name:"SetPromotionRulesRequest", type:"SetPromotionRulesRequest", 
                                          xmlRequired:true}
            },
            ID:"message:SetPromotionRulesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionalSaleResponse:{name:"SetPromotionalSaleResponse", type:"SetPromotionalSaleResponse", 
                                            xmlRequired:true}
            },
            ID:"message:SetPromotionalSaleResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionalSaleRequest:{name:"SetPromotionalSaleRequest", type:"SetPromotionalSaleRequest", 
                                           xmlRequired:true}
            },
            ID:"message:SetPromotionalSaleRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionalSaleListingsResponse:{name:"SetPromotionalSaleListingsResponse", 
                                                    type:"SetPromotionalSaleListingsResponse",xmlRequired:true}
            },
            ID:"message:SetPromotionalSaleListingsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetPromotionalSaleListingsRequest:{name:"SetPromotionalSaleListingsRequest", 
                                                   type:"SetPromotionalSaleListingsRequest",xmlRequired:true}
            },
            ID:"message:SetPromotionalSaleListingsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetReturnURLResponse:{name:"SetReturnURLResponse", type:"SetReturnURLResponse", xmlRequired:true}
            },
            ID:"message:SetReturnURLResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetReturnURLRequest:{name:"SetReturnURLRequest", type:"SetReturnURLRequest", xmlRequired:true}
            },
            ID:"message:SetReturnURLRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetShippingDiscountProfilesResponse:{name:"SetShippingDiscountProfilesResponse", 
                                                     type:"SetShippingDiscountProfilesResponse",xmlRequired:true}
            },
            ID:"message:SetShippingDiscountProfilesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetShippingDiscountProfilesRequest:{name:"SetShippingDiscountProfilesRequest", 
                                                    type:"SetShippingDiscountProfilesRequest",xmlRequired:true}
            },
            ID:"message:SetShippingDiscountProfilesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreResponse:{name:"SetStoreResponse", type:"SetStoreResponse", xmlRequired:true}
            },
            ID:"message:SetStoreResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreRequest:{name:"SetStoreRequest", type:"SetStoreRequest", xmlRequired:true}
            },
            ID:"message:SetStoreRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreCategoriesResponse:{name:"SetStoreCategoriesResponse", type:"SetStoreCategoriesResponse", 
                                            xmlRequired:true}
            },
            ID:"message:SetStoreCategoriesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreCategoriesRequest:{name:"SetStoreCategoriesRequest", type:"SetStoreCategoriesRequest", 
                                           xmlRequired:true}
            },
            ID:"message:SetStoreCategoriesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreCustomPageResponse:{name:"SetStoreCustomPageResponse", type:"SetStoreCustomPageResponse", 
                                            xmlRequired:true}
            },
            ID:"message:SetStoreCustomPageResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStoreCustomPageRequest:{name:"SetStoreCustomPageRequest", type:"SetStoreCustomPageRequest", 
                                           xmlRequired:true}
            },
            ID:"message:SetStoreCustomPageRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStorePreferencesResponse:{name:"SetStorePreferencesResponse", type:"SetStorePreferencesResponse", 
                                             xmlRequired:true}
            },
            ID:"message:SetStorePreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetStorePreferencesRequest:{name:"SetStorePreferencesRequest", type:"SetStorePreferencesRequest", 
                                            xmlRequired:true}
            },
            ID:"message:SetStorePreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetTaxTableResponse:{name:"SetTaxTableResponse", type:"SetTaxTableResponse", xmlRequired:true}
            },
            ID:"message:SetTaxTableResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetTaxTableRequest:{name:"SetTaxTableRequest", type:"SetTaxTableRequest", xmlRequired:true}
            },
            ID:"message:SetTaxTableRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetUserNotesResponse:{name:"SetUserNotesResponse", type:"SetUserNotesResponse", xmlRequired:true}
            },
            ID:"message:SetUserNotesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetUserNotesRequest:{name:"SetUserNotesRequest", type:"SetUserNotesRequest", xmlRequired:true}
            },
            ID:"message:SetUserNotesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetUserPreferencesResponse:{name:"SetUserPreferencesResponse", type:"SetUserPreferencesResponse", 
                                            xmlRequired:true}
            },
            ID:"message:SetUserPreferencesResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                SetUserPreferencesRequest:{name:"SetUserPreferencesRequest", type:"SetUserPreferencesRequest", 
                                           xmlRequired:true}
            },
            ID:"message:SetUserPreferencesRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ValidateChallengeInputResponse:{name:"ValidateChallengeInputResponse", type:"ValidateChallengeInputResponse", 
                                                xmlRequired:true}
            },
            ID:"message:ValidateChallengeInputResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ValidateChallengeInputRequest:{name:"ValidateChallengeInputRequest", type:"ValidateChallengeInputRequest", 
                                               xmlRequired:true}
            },
            ID:"message:ValidateChallengeInputRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ValidateTestUserRegistrationResponse:{name:"ValidateTestUserRegistrationResponse", 
                                                      type:"ValidateTestUserRegistrationResponse",xmlRequired:true}
            },
            ID:"message:ValidateTestUserRegistrationResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                ValidateTestUserRegistrationRequest:{name:"ValidateTestUserRegistrationRequest", 
                                                     type:"ValidateTestUserRegistrationRequest",xmlRequired:true}
            },
            ID:"message:ValidateTestUserRegistrationRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VeROReportItemsResponse:{name:"VeROReportItemsResponse", type:"VeROReportItemsResponse", 
                                         xmlRequired:true}
            },
            ID:"message:VeROReportItemsResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VeROReportItemsRequest:{name:"VeROReportItemsRequest", type:"VeROReportItemsRequest", xmlRequired:true}
            },
            ID:"message:VeROReportItemsRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VerifyAddItemResponse:{name:"VerifyAddItemResponse", type:"VerifyAddItemResponse", xmlRequired:true}
            },
            ID:"message:VerifyAddItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VerifyAddItemRequest:{name:"VerifyAddItemRequest", type:"VerifyAddItemRequest", xmlRequired:true}
            },
            ID:"message:VerifyAddItemRequest"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VerifyAddSecondChanceItemResponse:{name:"VerifyAddSecondChanceItemResponse", 
                                                   type:"VerifyAddSecondChanceItemResponse",xmlRequired:true}
            },
            ID:"message:VerifyAddSecondChanceItemResponse"
        })
,
        isc.WSDLMessage.create({
            fields:{
                VerifyAddSecondChanceItemRequest:{name:"VerifyAddSecondChanceItemRequest", type:"VerifyAddSecondChanceItemRequest", 
                                                  xmlRequired:true}
            },
            ID:"message:VerifyAddSecondChanceItemRequest"
        })

    ]
})

