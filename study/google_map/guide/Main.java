package google;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// 입력받은 A 값들
		int firstA = 0;
		int secondA = 0;
		
		// 입력받은 B 값들
		int firstB = 0;
		int secondB = 0;
		int thirdB = 0;
		int fourthB = 0;
		
		// 입력내용
		Scanner scanner = new Scanner(System.in);
		System.out.println("input firstA : ");
		firstA = scanner.nextInt();
		System.out.println("input secondA : ");
		secondA = scanner.nextInt();
		System.out.println("input firstB : ");
		firstB = scanner.nextInt();
		System.out.println("input secondB : ");
		secondB = scanner.nextInt();
		System.out.println("input thirdB : ");
		thirdB = scanner.nextInt();
		System.out.println("input fourthB : ");
		fourthB = scanner.nextInt();
		
		// 계산을 위한 b 값들
		double b1 = 0;
		double b2 = 0;
		double b3 = 0;
		double b4 = 0;

		// 정해져있는 9개의 B 좌표에서 
		// 선택된 2개의 A 좌표 사이의 거리 순서 
		double B1_A1 = 0;
		double B2_A1 = 0;
		double B3_A1 = 0;
		double B4_A1 = 0;
		double B5_A1 = 0;
		double B6_A1 = 0;
		double B7_A1 = 0;
		double B8_A1 = 0;
		double B9_A1 = 0;
		
		double B1_A2 = 0;
		double B2_A2 = 0;
		double B3_A2 = 0;
		double B4_A2 = 0;
		double B5_A2 = 0;
		double B6_A2 = 0;
		double B7_A2 = 0;
		double B8_A2 = 0;
		double B9_A2 = 0;

		// A 값 들어왔을 때 각 B 까지의 거리 순서 표 
		switch (firstA) {
		case 1:
			B1_A1 = 4.131;
			B2_A1 = 5.012;
			B3_A1 = 3.111;
			B4_A1 = 2.131;
			B5_A1 = 8.041;
			B6_A1 = 6.021;
			B7_A1 = 7.013;
			B8_A1 = 1.021;
			B9_A1 = 9.231;
			break;
			
		case 2:
			B1_A1 = 1.253;
			B2_A1 = 5.233;
			B3_A1 = 4.273;
			B4_A1 = 3.273;
			B5_A1 = 8.253;
			B6_A1 = 6.243;
			B7_A1 = 7.273;
			B8_A1 = 2.258;
			B9_A1 = 9.293;
			break;
			
		case 3:
			B1_A1 = 8.454;
			B2_A1 = 9.435;
			B3_A1 = 5.455;
			B4_A1 = 6.345;
			B5_A1 = 1.425;
			B6_A1 = 3.423;
			B7_A1 = 2.575;
			B8_A1 = 7.435;
			B9_A1 = 4.425;
			break;
			
		case 4:
			B1_A1 = 7.587;
			B2_A1 = 8.587;
			B3_A1 = 5.647;
			B4_A1 = 6.647;
			B5_A1 = 3.657;
			B6_A1 = 4.677;
			B7_A1 = 2.697;
			B8_A1 = 9.647;
			B9_A1 = 1.667;
			break;
			
		case 5:
			B1_A1 = 8.839;
			B2_A1 = 9.879;
			B3_A1 = 5.879;
			B4_A1 = 6.839;
			B5_A1 = 4.849;
			B6_A1 = 3.839;
			B7_A1 = 2.839;
			B8_A1 = 7.829;
			B9_A1 = 1.819;
			break;
		}

		switch (secondA) {
		case 1:
			B1_A2 = 4.241;
			B2_A2 = 5.031;
			B3_A2 = 3.301;
			B4_A2 = 2.031;
			B5_A2 = 8.021;
			B6_A2 = 6.011;
			B7_A2 = 7.081;
			B8_A2 = 1.081;
			B9_A2 = 9.081;
			break;
			
		case 2:
			B1_A2 = 1.263;
			B2_A2 = 5.273;
			B3_A2 = 4.233;
			B4_A2 = 3.253;
			B5_A2 = 8.253;
			B6_A2 = 6.243;
			B7_A2 = 7.253;
			B8_A2 = 2.263;
			B9_A2 = 9.273;
			break;
			
		case 3:
			B1_A2 = 8.455;
			B2_A2 = 9.465;
			B3_A2 = 5.475;
			B4_A2 = 6.485;
			B5_A2 = 1.495;
			B6_A2 = 3.465;
			B7_A2 = 2.455;
			B8_A2 = 7.445;
			B9_A2 = 4.465;
			break;
			
		case 4:
			B1_A2 = 7.667;
			B2_A2 = 8.657;
			B3_A2 = 5.667;
			B4_A2 = 6.677;
			B5_A2 = 3.657;
			B6_A2 = 4.677;
			B7_A2 = 2.687;
			B8_A2 = 9.697;
			B9_A2 = 1.677;
			break;
			
		case 5:
			B1_A2 = 8.869;
			B2_A2 = 9.589;
			B3_A2 = 5.849;
			B4_A2 = 6.869;
			B5_A2 = 4.879;
			B6_A2 = 3.889;
			B7_A2 = 2.899;
			B8_A2 = 7.809;
			B9_A2 = 1.809;
			break;
		}

		switch (firstB) {
		case 1: b1 = (B1_A1 + B1_A2) / 2; break;
		case 2: b1 = (B2_A1 + B2_A2) / 2; break;
		case 3: b1 = (B3_A1 + B3_A2) / 2; break;
		case 4: b1 = (B4_A1 + B4_A2) / 2; break;
		case 5: b1 = (B5_A1 + B5_A2) / 2; break;
		case 6: b1 = (B6_A1 + B6_A2) / 2; break;
		case 7: b1 = (B7_A1 + B7_A2) / 2; break;
		case 8: b1 = (B8_A1 + B8_A2) / 2; break;
		case 9: b1 = (B9_A1 + B9_A2) / 2; break;
		}

		switch (secondB) {
		case 1: b2 = (B1_A1 + B1_A2) / 2; break;
		case 2: b2 = (B2_A1 + B2_A2) / 2; break;
		case 3: b2 = (B3_A1 + B3_A2) / 2; break;
		case 4: b2 = (B4_A1 + B4_A2) / 2; break;
		case 5: b2 = (B5_A1 + B5_A2) / 2; break;
		case 6: b2 = (B6_A1 + B6_A2) / 2; break;
		case 7: b2 = (B7_A1 + B7_A2) / 2; break;
		case 8: b2 = (B8_A1 + B8_A2) / 2; break;
		case 9: b2 = (B9_A1 + B9_A2) / 2; break;
		}

		switch (thirdB) {
		case 1: b3 = (B1_A1 + B1_A2) / 2; break;
		case 2: b3 = (B2_A1 + B2_A2) / 2; break;
		case 3: b3 = (B3_A1 + B3_A2) / 2; break;
		case 4: b3 = (B4_A1 + B4_A2) / 2; break;
		case 5: b3 = (B5_A1 + B5_A2) / 2; break;
		case 6: b3 = (B6_A1 + B6_A2) / 2; break;
		case 7: b3 = (B7_A1 + B7_A2) / 2; break;
		case 8: b3 = (B8_A1 + B8_A2) / 2; break;
		case 9: b3 = (B9_A1 + B9_A2) / 2; break;
		}

		switch (fourthB) {
		case 1: b4 = (B1_A1 + B1_A2) / 2; break;
		case 2: b4 = (B2_A1 + B2_A2) / 2; break;
		case 3: b4 = (B3_A1 + B3_A2) / 2; break;
		case 4: b4 = (B4_A1 + B4_A2) / 2; break;
		case 5: b4 = (B5_A1 + B5_A2) / 2; break;
		case 6: b4 = (B6_A1 + B6_A2) / 2; break;
		case 7: b4 = (B7_A1 + B7_A2) / 2; break;
		case 8: b4 = (B8_A1 + B8_A2) / 2; break;
		case 9: b4 = (B9_A1 + B9_A2) / 2; break;
		}

		
		
		double[] arr = { b1, b2, b3, b4 };
		
		double min = 999;
		int minIndex = 0;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
				minIndex = i;
			}
		}

		double second = 999;
		int secondIndex = 0;

		for (int i = 0; i < arr.length; i++) {
			if (i == minIndex) { // 가장 작은 값은 패스
				continue;
			}
			if (arr[i] < second) {
				second = arr[i];
				secondIndex = i;
			}
		}

		// 반환을 위해 배열 넘버 에 1 플러스
		minIndex += 1;
		secondIndex += 1;
		
		//반환할 b값
		int b1result=0;
		int b2result=0;
		
		//인덱스값, 즉 순서에 맞는 원래 입력된 b 넘버 반환
		switch (minIndex) {
		case 1: b1result = firstB; break;
		case 2: b1result = secondB; break;
		case 3: b1result = thirdB; break;
		case 4: b1result = fourthB; break;	}
		
		switch (secondIndex) {
		case 1: b2result = firstB; break;
		case 2: b2result = secondB; break;
		case 3: b2result = thirdB; break;
		case 4: b2result = fourthB; break;	}
		
		System.out.println(firstA + " " + secondA + " " +firstB +" " + secondB + " " +thirdB + " " +fourthB);
		System.out.println(b1 + " " + b2 + " " +b3 +" " + b4);
		System.out.println("A"+ firstA +" > " + "B" +b1result + " > A"+ secondA +" > B" +b2result);

	}
}
