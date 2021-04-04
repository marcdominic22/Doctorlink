import React from "react";

// COMPONENTS
import { Grid, Table } from "semantic-ui-react";
import TextControl from "../../controls/text-control";
import TableControl from "../../controls/table-control";
import TableCellControl from "../../controls/table-cell-control";

// DATA
import { LOGIN_TERMS_AND_CONDITIONS_HEADERS } from "../../../data/login";

const Terms = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <TextControl>
                        DoctorLink is one of the electronic systems used by Maxicare Healthcare
                        Corporation (“Maxicare”) in digitally delivering healthcare services to its
                        Members. It is part of an electronic and automated ecosystem that provides
                        electronic and communications technologies to Maxicare affiliated physicians
                        and healthcare providers (collectively the “Providers”) for the efficient
                        and effective rendition of healthcare services, including Telemedicine
                        services (whether teleconsult or videoconsult). Maxicare has relevant and
                        necessary access and authorization to use DoctorLink, which is a platform
                        developed by MediLink Network Inc. ("Third-Party Owner"). DoctorLink
                        includes a browser interface, data encryption, transmission, access and
                        storage. It is an electronic communication channel that extends primary
                        healthcare services to Maxicare members such as Telemedicine and claims
                        processing offered by Maxicare Healthcare Corporation (“Maxicare”) through
                        its affiliated physicians & healthcare providers (“Provider”). Electronic
                        and communications technologies such as Payorlink, Communication stack (for
                        SMS and email) and Member Gateway.
                    </TextControl>

                    <TextControl>
                        These Terms and Conditions, including any modification or revision which
                        Maxicare or the Third-Party Owner may introduce from time to time, shall
                        govern your participation, access to and use of DoctorLink as a Provider,
                        including for Telemedicine services, It will be part of the Physician
                        Affiliation Agreement (as may be applicable) and any other relevant
                        agreement executed between you and Maxicare, including but not limited to,
                        the privacy and security policies, medical and handling protocols, and
                        reporting rules, which are hereby incorporated by reference, and subject to
                        changes and notices by Maxicare (hereinafter the <b>“Agreements”</b>). All
                        other provisions of the Agreements which are not inconsistent to these Terms
                        and Conditions are deemed applicable and incorporated. In case any conflict
                        arises between the provisions of these Terms and Condition and the
                        Agreements, these Terms and Conditions shall govern in so far as DoctorLink
                        and healthcare services related to it are concerned.We advise you to please
                        review these Terms and Conditions carefully and indicate your agreement or
                        disagreement thereto by clicking the appropriate box towards the end of
                        these Terms and Conditions.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        1. By registering in Telemedicine consultation as a Telemedicine provider,
                        you acknowledge and agree to abide by all the terms and conditions contained
                        herein, in the Physician Affiliation Agreement and in any other relevant
                        agreement (the <b>“Agreements”</b>) executed between you and Maxicare,
                        including but not limited to, the privacy and security policies, medical and
                        handling protocols, and reporting rules, which are hereby incorporated by
                        reference, subject to changes and notices by Maxicare. Your signature may no
                        longer be required to manifest your consent herein. All other provisions of
                        the Agreements which are not inconsistent to these Terms and Conditions are
                        deemed applicable and incorporated. In case any conflict arises between the
                        provisions of the Agreements and these Terms and Conditions, the Terms and
                        Conditions shall govern in so far as the conflict involves Teleconsultation.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        2. <b>Proficiencies and Competencies.</b> By registering in DoctorLink as a
                        Provider, you represent that you have the following proficiencies,
                        competencies and access to the relevant equipment, to wit:
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        a. Proficiency in digital communication skills, clinical acumen, capacity to
                        perform virtual physical exams using remote examination techniques and/or
                        remote monitoring devices, and knowledge of technology and equipment to be
                        used, while adhering to ethical practice;
                    </TextControl>
                    <TextControl indented indentLevel={4}>
                        b. If using an online video or messaging software or application, a stable
                        internet connection is needed. A private, well-lit location is preferred,
                        especially for video consult.
                    </TextControl>
                    <TextControl indented indentLevel={4}>
                        c. Measures to ensure privacy of Telemedicine services so as to prevent
                        unauthorized persons from overhearing, wire-tapping and/or recording any
                        privileged communication without the consent of the Member.
                    </TextControl>
                    <TextControl indented indentLevel={4}>
                        d. Capacity to address any technical difficulties encountered in the course
                        of the Telemedicine services. Maxicare shall not be responsible in providing
                        technical assistance or troubleshooting services encountered during the
                        Telemedicine services with a Member.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        3. <b>Referrals to Maxicare Primary Care Centers.</b> You hereby agree and
                        understand that if in the course of the performance of the Telemedicine
                        services, you have determined that there is a medical necessity for a Member
                        to undergo certain laboratory, clinic, diagnostic or pharmaceutical tests,
                        procedures and/or services, and you have in fact prescribed the conduct of
                        the said tests, procedures and/or services, you shall refer the said Member
                        to the Maxicare Primary Care Centers (<b>PCCs</b>) for the performance of
                        such tests, procedures and/or services. Referral to other clinics or
                        laboratories shall only be allowed in cases when the prescribed tests,
                        procedures and/or services are not available in the PCCs and/or when there
                        is no PCC available in the area. In no event shall you require the Member to
                        retake previously prescribed and taken tests, procedures and/or services
                        based on the sole reason that said tests, procedures and/or services were
                        performed in a PCC.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        4. <b>Document Retention.</b> You hereby understand and agree that you shall
                        retain the original hard copies (and as may be applicable, electronic copies
                        if electronically-transmitted) of the billing statements, official receipts,
                        supporting documents, medical notes and other documents, (collectively the
                        <b>“records”</b>) related to your performance of services as a Provider or
                        healthcare services to the Members or relating to the Agreements for a
                        period of ten (10) years from submission of the scanned copies of the
                        records (and/or from electronic transmission, as may be applicable) to
                        Maxicare. Upon prior written notice, Maxicare and its duly authorized
                        representatives shall be given the right to examine the said records and to
                        ask for copies thereof as may be necessary or as the occasion demands. Upon
                        request of Maxicare, you shall transmit the requested records within fifteen
                        (15) days from receipt of request notice. The expenses for the reproduction
                        of the records shall be for your account.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        5. <b>Provider Relations Services.</b> You hereby agree and understand that
                        in the course of your affiliation as a Provider, Maxicare shall continue to
                        develop and fine tune the healthcare services provided to its Members,
                        including the Telemedicine services. As such, Maxicare and/or its
                        representatives, agents, and third-party providers (including the
                        Third-Party Owner), may from time to time issue new policies, notices,
                        campaigns, programs, applications and/or software for the Provider’s use and
                        compliance. As such, you hereby agree that you shall abide by new policies,
                        notices, campaigns, and/or use the new programs, applications and/or
                        software especially those relating to Telemedicine, e-Health and electronic
                        claims and settlement.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        6. <b>Representations and Warranties.</b> You are solely responsible for the
                        accuracy, completeness and fulfilment of any and all your representations,
                        warranties and undertakings under these Terms and Conditions, the Agreements
                        and in the performance of the healthcare services, including but not limited
                        to your qualifications and credentials as a Provider. All such
                        representations, warranties and undertakings shall be deemed to be material
                        and have been relied upon by Maxicare in entering into the Agreements; or by
                        Maxicare and the Third-Party Owner in providing participation, access and
                        use of DoctorLink. They shall survive the execution, delivery or termination
                        of these Terms and Conditions or the Agreements, notwithstanding the
                        consummation of the transactions contemplated herein.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        7. <b>Authority to Process.</b> You understand and agree that as part of
                        your registration in DoctorLink as a Provider and in rendering the
                        healthcare services to the Members, and as part of your obligations under
                        these Terms and Conditions and in the Agreements, Maxicare shall engage the
                        services of, procure goods and services from, collaborate and/or interact
                        with, third parties, such as, but not limited to its parent company,
                        affiliated companies, subsidiaries, financial advisors, affiliated third
                        parties and service providers or independent/non-affiliated third parties
                        and service providers, whether local or foreign, which includes the
                        Third-Party Owners (collectively referred to as{" "}
                        <b>&quot;Representatives&quot;</b>), including their stockholders,
                        directors, officers, employees, agents, brokers or representatives
                        (collectively, the “authorized representatives”). In connection with the
                        foregoing, you hereby irrevocably authorize Maxicare and its
                        Representatives, as controller and/or processor of your personal
                        information, to be your attorney-in-fact to:
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        a. Obtain, examine, process, collect, store, update or modify, retrieve,
                        consult, use, consolidate, block, erase, destroy, share, disclose or do any
                        operation or set of operations (collectively <b>“process”/”processing”</b>)
                        your personal information, including sensitive personal information and
                        privileged information such as but not limited to full name, gender,
                        birthday, email address, mobile number, Professional Regulation Commission
                        (PRC) number, specialization and subspecialization, VAT status, Tax
                        Identification Number (TIN), bank name (for those enrolled in auto-credit
                        arrangement mode of payment), bank account number, mode of Telemedicine and
                        practice schedule (including day and time), recording or any other
                        information that is necessary for you to comply with your obligations in the
                        Agreements, as may be deemed necessary by Maxicare (collectively the
                        <b>“Personal Data”</b>). Except as otherwise stated in these Terms and
                        Conditions, any Personal Data obtained relative to the authority herein
                        given shall be strictly confidential. The extent of the processing of the
                        Personal Data shall be limited to what is necessary, appropriate or
                        incidental to the performance of your obligation under these Terms and
                        Conditions, the Agreements, and in the performance of healthcare services.
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        b. Process and Disclose the Personal Data to Maxicare, its Representatives
                        and their authorized representatives, Clients and Members, for any
                        legitimate business purpose as Maxicare may deem appropriate and as
                        necessary to comply with your obligations in these Terms and Conditions, the
                        Agreements, or in the performance of the healthcare services.
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        c. Post or otherwise make public your relevant Personal Data which shall
                        include but not limited to; (1) complete name, (2) specialization, (3)
                        clinic schedule, (4) contact information, (5) messaging account handles, and
                        (6) social media information to Maxicare’s Member Gateway systems,
                        MaxiHealth app, and other Maxicare systems or partner eHealth platforms.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        Processing would include both manual and automated handling, storage and
                        transfer of Personal Data using various means and methods, whether physical
                        or via information and communications systems employed by Maxicare and its
                        Representatives.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        The Processing contemplated in these Terms and Conditions shall be without
                        prejudice to and shall take into account and uphold the rights of a Data
                        Subject under the Data Privacy Act of 2012 including its Implementing Rules
                        and Regulations and other issuances of the National Privacy Commission
                        (collectively, the <b>“Data Privacy Laws”</b>), such as but not limited to
                        the right to be informed, to object, access, complain, and rectify, to
                        request for filtering of certain information, and to the corresponding
                        damages in case of violation of your rights within the corresponding
                        limitations as set forth under the pertinent laws.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        8. <b>Data Sharing.</b> As a Provider, you and Maxicare recognize that
                        sharing and processing of your Personal Data or that of other data subjects
                        such as the Members (the term “Personal Data” shall hereinafter cover and
                        include the personal information, sensitive personal information and
                        privilege information of such other data subjects), are necessary and
                        desirable in the performance of your obligations as a Provider, under these
                        Terms and Conditions, the Agreements and in the performance of the
                        healthcare services and to Maxicare’s conduct of business.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        The Personal Data of any data subject collected, processed and shared
                        pursuant to these Terms and Conditions, the Agreements and in relation to
                        the performance of the healthcare services shall be collected, processed and
                        shared exclusively for the purposes of the services and transactions
                        contemplated in these Terms and Conditions, the Agreements, and the
                        performance of the healthcare services while maintaining compliance with
                        Data Privacy Laws and other issuances of relevant government agencies such
                        as the Department of Health and the Insurance Commission.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        9. <b>Information to be Shared.</b> The following Personal Data are agreed
                        to be shared to the following individuals/entities herein provided:
                    </TextControl>

                    <TableControl
                        fixed
                        singleLine={false}
                        headers={LOGIN_TERMS_AND_CONDITIONS_HEADERS}
                    >
                        <Table.Body>
                            <Table.Row>
                                <TableCellControl content="Patient Registration Information or Availment (LOA) Order for Patients " />
                                <TableCellControl content="Maxicare" />
                                <TableCellControl content="Telemedicine Physician" />
                            </Table.Row>
                            <Table.Row>
                                <TableCellControl content="Telemedicine Physician  practice,  Contact Details, Schedule of consultation, messaging and social media accounts/platforms" />
                                <TableCellControl content="Telemedicine  Physician" />
                                <TableCellControl content="Members" />
                            </Table.Row>
                        </Table.Body>
                    </TableControl>

                    <TextControl indented indentLevel={2}>
                        10. <b>Obligations as Data Controller or Processor.</b> As a Data Controller
                        or Processor, you hereby represent and warrant that:
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        a. You shall implement reasonable and appropriate organizational, physical
                        and technical measures intended for the protection of Personal Data against
                        (i) any accidental or unlawful destruction, alteration and disclosure, as
                        well as against any other unlawful processing, and (ii) natural dangers such
                        as accidental loss or destruction, and human dangers such as unlawful
                        access, fraudulent misuse, unlawful destruction, alteration and
                        contamination
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        b. Your employees, agents or representatives who are involved in the
                        processing of Personal Data shall operate and hold the Data under strict
                        confidentiality if the Data is not intended for public disclosure. This
                        obligation shall continue even after transfer to another position or upon
                        termination of employment or contractual relations.
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        c. You shall ensure that your employees, agents or representatives do not
                        transfer or share Personal Data to any unauthorized person or entity; or
                        retain any Personal Data longer than is necessary for the performance of
                        your obligations under these Terms and Conditions, the Agreements or the
                        performance of the healthcare services or as required or permitted by the
                        Data Privacy Laws or internal document retention policies.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        11. <b>Security Breach.</b> When you know or reasonably suspect that an
                        Information Security Breach has affected the Personal Data or any
                        Information provided by Maxicare or the Member, you shall promptly notify
                        Maxicare [in any case within the 24 hours following such knowledge or
                        discovery] and cooperate with Maxicare in any post-breach/incident
                        investigation, notification requirement, or remediation efforts. The
                        notification shall, at the minimum, describe the nature of the breach or
                        incident, effects thereof, the Personal Data or Information possibly
                        involved and the measures taken by the entity to address the incident or
                        remediate the breach. It shall also include measures taken to reduce the
                        harm or negative consequences of the breach or the security incident.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        You may contact our Data Privacy Officer thru the following contact details:
                    </TextControl>

                    <TextControl indented indentLevel={6}>
                        Data Protection Officer : Mr. Jose Michael Tagle, CISM, DPO[TuV]
                        <br />
                        Telephone no: (02) 8908-6989
                        <br />
                        Email address: dpo@maxicare.com.ph
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        12. <b>Period of Validity.</b> In accordance with your obligations under
                        these Terms and Condition and in the Agreements, the authorities herein
                        provided shall be valid and existing during the term of such Agreements,
                        including any extensions thereof, and until necessary for the establishment,
                        exercise or defense of any claims arising from the said Agreements.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        13. <b>Data Privacy Rights.</b> You hereby warrant that you understand your
                        rights and obligations pursuant to the Data Privacy Laws.. Consequently, you
                        hereby agree to hold Maxicare, its Representatives and their authorized
                        representatives free and harmless from and against any and all suits or
                        claims, actions, or proceedings, damages, costs, and expenses, including
                        attorney's fees, which may be filed, charged, or adjudged against Maxicare,
                        its Representatives and their authorized representatives in connection with
                        or arising from the use, processing, sharing and disclosure by Maxicare, the
                        Representatives or their authorized representatives of and Personal Data
                        pursuant to their reliance on your consent that they have the authority to
                        use, process, share or disclose, as the case may be, said Personal Data.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        14. <b>Confidentiality.</b> You, including your employees, agents or
                        representatives shall not use or reproduce, directly or indirectly any
                        Confidential Information for the benefit of any person or entity, nor
                        disclose to anyone such Confidential Information without the written
                        authorization from Maxicare’s duly authorized officer, whether during or
                        after the term of these Terms and Conditions and the Agreements.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        “Confidential Information” means any data or information, that is
                        proprietary to Maxicare and not generally known to the public, provided
                        before or after, whether tangible or intangible form, whenever and however
                        disclosed, including, without limitation, (a) personal information about
                        patients, consultations, healthcare services performed, treatments or
                        operations undergone, including their Personal Data (b) trade secrets,
                        confidential or secret formulae, special medical equipment and procedures,
                        (c) medical utilization reports, directly or indirectly useful in any aspect
                        of the business of Maxicare, (d) any vendor names, patient and supplier
                        lists, (e) marketing strategies, plans, financial information, or
                        projections, operations, sales estimates, business plans and performance
                        results relating to the past, present or future business activities of
                        Maxicare, (f) all intellectual or other proprietary information or material
                        of Maxicare; (g) all forms of the Confidential Information including, but
                        not limited to, loose notes, diaries, memoranda, drawings, photographs,
                        electronic storage and computer printouts; (h) any other information that
                        should reasonably be recognized as Confidential Information of Maxicare. All
                        information which Provider and/or its representatives acquire or become
                        acquainted with during the period of the Agreements, whether developed by
                        them or by others, which Provider has a reasonable basis to believe to be
                        Confidential Information, or which is treated, designated and/or identified
                        by Maxicare as such, shall be deemed to be Confidential Information.
                        Confidential Information need not be novel, unique, patentable,
                        copyrightable or constitute a trade secret in order to be designated as
                        such.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        Anything herein to the contrary, notwithstanding, Confidential Information
                        shall not include information which: (a) was known by Provider prior to
                        receiving the Confidential Information from the disclosing party; (b)
                        becomes rightfully known to the Provider from a third-party source not known
                        after diligent inquiry by the Provider to be under an obligation to the
                        disclosing party to maintain confidentiality; (c) is or becomes publicly
                        available through no fault of or failure to act by the Provider in breach of
                        the Agreements; (d) is required to be disclosed by law or regulation or in
                        any judicial or administrative proceeding provided, however, that: (i)
                        Provider has provided Maxicare with prompt written notice thereof so that
                        the disclosing party may seek appropriate remedy and/or injunctive relief
                        prior to such disclosure by the Provider, (ii) Provider has taken all
                        reasonable actions and/or steps to resist or narrow down the information to
                        be disclosed; (iii) should partial disclosure be required, the Provider
                        furnishes only that portion that is legally required to be disclosed; and
                        (iv) Provider shall not oppose and shall cooperate with Maxicare with
                        respect to any such request for any protective order or other relief; (e) is
                        or has been independently developed by employees, consultants or agents of
                        the receiving party without violation of the terms of this agreement or
                        reference or access to any Confidential Information; and (f) is disclosed
                        with Maxicare’s prior written consent.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        15. You agree that all Confidential Information shall remain the exclusive
                        property of Maxicare and its successors and assigns.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        16. In the event that you disclose, disseminate or release any Confidential
                        Information received from Maxicare, except as may be permitted above, such
                        disclosure, dissemination or release will be deemed a material breach of
                        these Terms and Conditions and the Agreements. The obligations imposed
                        herein shall survive even after the termination of these Terms and
                        Conditions and the Agreements.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        17. <b>Liabilities and Indemnification.</b> Maxicare shall not be liable for
                        any loss or damage of whatever nature in the following instances:
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        a. Disruption, failure or delay which are due to force majeure or other
                        inevitable or unforeseen circumstances or those which are beyond the control
                        of Maxicare, fortuitous events such as but not limited to prolonged power
                        outages, breakdown in computers and communication facilities, typhoons,
                        public disturbances and calamities, and other similar or related cases;
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        b. Loss or damage you may suffer due to theft or unauthorized use of your
                        passwords, personal data, or violation of other security measures with or
                        without your participation;
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        c. Inaccurate, incomplete or delayed information you received due to
                        disruption or failure of any communication facilities; and
                    </TextControl>

                    <TextControl indented indentLevel={4}>
                        d. Other circumstances analogous to the foregoing.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        18. Maxicare, its Representatives and their authorized representatives shall
                        not be liable for any loss, liability, damage or expense arising out of or
                        in connection with the Telemedicine services and the participation, use and
                        access to DoctorLink, unless such loss, liability, damage or expense shall
                        be proven to result directly from the gross negligence or willful misconduct
                        of Maxicare, its Representatives or their authorized representatives. In no
                        event will Maxicare, its Representatives and their authorized
                        representatives be liable for special, indirect, punitive or consequential
                        damages. Under no circumstances will the liability of Maxicare, its
                        Representatives and their authorized representatives exceed, in the
                        aggregate, the fees actually paid to the Provider pursuant to the Agreements
                        during the six (6) months immediately preceding the claims.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        19. <b>Intellectual Property.</b> Maxicare and its Representatives shall
                        retain all rights in any software, user and system documentation, master and
                        transaction data files, ideas, concepts, know-how, processes, development
                        tools, techniques or any other proprietary material or information,
                        including all intellectual property rights over the Telemedicine services,
                        DoctorLink and other healthcare services rendered pursuant to these Terms
                        and Conditions and the Agreements,
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        20. <b>Governing Law and Venue of Suit.</b> The Terms and Conditions
                        contained herein are governed by the laws of the Republic of the Philippines
                        and all suits to enforce these Terms and Conditions (including the
                        Agreements, unless a different venue is provided in the Agreements) shall be
                        brought exclusively in the proper courts of Makati City, to the exclusion of
                        all other courts.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        21. <b>Breach.</b> In case of breach of any of the provisions of these Terms
                        and Conditions (including the Agreements, unless a different amount is
                        provided in the Agreements), including the warranties, representations, and
                        undertakings stated herein, Maxicare shall be entitled to the amount of Two
                        Hundred Thousand Pesos (P200,000.00) as minimum damages, in addition to any
                        other damages which it may be entitled under the law, and attorney's fees in
                        the amount of One Hundred Thousand Pesos (P100,000.00) in the event that it
                        shall be constrained to engage the services of counsel to prosecute or
                        defend its claim. In addition, Maxicare may, at its option, disaffiliate you
                        as a Provider in general or specifically for the Telemedicine services.
                        Resorting to a remedy described herein does not preclude Maxicare from
                        exercising any other rights granted in these Terms and Conditions, the
                        Agreements and the applicable laws.
                    </TextControl>

                    <TextControl indented indentLevel={2}>
                        22. Maxicare reserves the right to modify, revise or amend these Terms and
                        Conditions at any time without the need of prior notice or approval. You may
                        access https://www.maxicare.com.ph/doctorlink-terms for the latest version
                        of the Terms and Conditions applicable to the participation, access to and
                        use of DoctorLink and any queries related thereto may be addressed to
                        dpo@maxicare.com.ph.
                    </TextControl>

                    <TextControl>
                        I have read and fully understood these Terms and Conditions, unqualifiedly
                        accept the same, agree to be governed thereby, and undertake to strictly
                        comply with these Terms and Conditions.
                    </TextControl>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Terms;

Terms.propTypes = {};

Terms.defaultProps = {};
